import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from "./routes/uploadRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    
});

app.use("/api/user" , userRoutes );
app.use("/api/upload" , uploadRoutes );


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
