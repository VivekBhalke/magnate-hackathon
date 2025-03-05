import os
import re
import json
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from utils.document_util import extract_from_pdf, extract_from_scanned_pdf, tag_documents
from llm.llm_chain import LLM
from vectorstore.faiss_store import FAISSStore

app = Flask(__name__)

UPLOAD_FOLDER = "uploads"
ALLOWED_EXTENSIONS = {"pdf"}
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files["file"]
    clauses = request.form.getlist("clauses")

    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config["UPLOAD_FOLDER"], filename)
        file.save(filepath)

        # Initialize LLM & FAISS
        llm = LLM()
        llm_chain = llm.get_chain()
        faiss_store = FAISSStore()

        # Extract and process document
        data = extract_from_scanned_pdf(filepath)
        tagged_documents = tag_documents(data)
        faiss_store.add_documents(tagged_documents)

        results = {}
        for clause in clauses:
            relevant_documents = faiss_store.search(query=clause)
            summary = llm.summarize(
                relevant_documents=relevant_documents,
                query=clause,
                chain=llm_chain,
                class_name="Not_Applicable",
            )
            results[clause] = summary

        return jsonify({"summaries": results})

    return jsonify({"error": "Invalid file format"}), 400


if __name__ == "__main__":
    app.run(debug=True)
