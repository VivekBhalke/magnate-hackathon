import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './conect.js';
import userRoutes from "./routes/userRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js";
import path from 'path';
import twilioRoutes from "./routes/twilioRoutes.js"
import axios from "axios"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use('/public', express.static(path.join(process.cwd(), 'public')));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    
});

app.use("/api/user" , userRoutes );
app.use("/api/upload" , uploadRoutes );
app.use("/api/twilio", twilioRoutes);
app.get("/api/lawyers", async (req, res) => {
    try {
        const { lat, lng } = req.query;
        const apiKey = process.env.GOOGLE_PLACES_API_KEY;
        const radius = 5000; // 5km
        const type = "lawyer";

        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=${apiKey}`;
        const response = await axios.get(url);

        res.json(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch lawyers" });
    }
});
connectDB()

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});