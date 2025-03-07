import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Razorpay from "razorpay";

dotenv.config({path: "./config.env"});
const app = express();

app.use(cors());
app.use(bodyParser.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

console.log("Using Razorpay Key:", process.env.RAZORPAY_KEY_ID);

app.post("/create-order", async (req, res) => {
    console.log("Received amount from frontend:", req.body.amount);

    const amount = parseFloat(req.body.amount);
    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

  const options = {
    amount: amount * 100, 
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    console.log("Order Created:", order);
    res.json(order);
  } catch (error) {
    console.error("Razorpay Error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
