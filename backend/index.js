import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;



// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});