
import {clerkClient} from "@clerk/clerk-sdk-node";
import dotenv from "dotenv"
dotenv.config();
export const clerk = new clerkClient({
  apiKey: process.env.CLERK_SECRET_KEY, 
});


