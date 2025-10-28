// backend/server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());


const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/travelDB";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ---------- Booking schema ----------
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  tourPackage: String,
  visitDate: String,      // yyyy-mm-dd
  proofType: String,
  proofNumber: String,
  paymentMethod: String,
  amountPaid: Number,
  createdAt: { type: Date, default: Date.now },
});

const Booking = mongoose.model("Booking", bookingSchema);

// ---------- Routes ----------
app.get("/", (req, res) => res.send("Tour Booking API running"));

app.post("/api/bookings", async (req, res) => {
  try {
    const b = new Booking(req.body);
    await b.save();
    res.status(201).json({ message: "Booking saved", booking: b });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save booking" });
  }
});

app.get("/api/bookings", async (req, res) => {
  const bookings = await Booking.find().sort({ createdAt: -1 });
  res.json(bookings);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));
