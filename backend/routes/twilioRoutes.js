import express from "express";
import twilio from "twilio";
import dotenv from "dotenv"
dotenv.config()
const router = express.Router();

// Twilio Client Setup
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
console.log("TWILIO_ACCOUNT_SID:", process.env.TWILIO_ACCOUNT_SID);
console.log("TWILIO_AUTH_TOKEN:", process.env.TWILIO_AUTH_TOKEN);
// Route to Make a Call
router.post("/make-call", async (req, res) => {
    const { to } = req.body;

    if (!to) {
        return res.status(400).json({ message: "Phone number is required" });
    }

    try {
        const sms = await client.messages.create({
            body: "appointement booked",
            from: process.env.TWILIO_PHONE_NUMBER,
            to: to,  // Example: "+917741989282"
        })

        res.json({ message: "Call initiated", callSid: sms.sid });
    } catch (error) {
        res.status(500).json({ message: "Error making call", error: error.message });
    }
});

// TwiML Response for Call
router.post("/voice", (req, res) => {
    const twiml = `
      <Response>
        <Say voice="alice">Hello! Your appointment is confirmed for tomorrow at 10 AM.</Say>
      </Response>
    `;

    res.type("text/xml").send(twiml);
});

export default router;
