import React, { useContext, useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { UserDataContext } from "../context/userContext";
import axios from "axios"
export function FileUploadDemo() {
  const [files, setFiles] = useState([]);
  const user = useContext(UserDataContext);
const handleFileUpload = async (files) => {
  if (files && files[0] ) {  // Check if file and email are provided
      const formData = new FormData();
      formData.append("pdf", files[0]);          
      formData.append("email", user.email);           // Append email

      try {
          const response = await axios.post("http://localhost:3000/api/upload", formData, {
              headers: {
                  "Content-Type": "multipart/form-data",  // Set content type for form data
              },
          });
          console.log("File uploaded successfully:", response.data);
      } catch (error) {
          console.error("Error uploading file:", error);
      }
  } else {
      console.log("File or email missing!");
  }
};

  return (
    (<div
      className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
    </div>)
  );
}
