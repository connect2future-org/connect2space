import 'dotenv/config';
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

// Check environment
console.log(
  "MONGODB_URI:",
  process.env.MONGODB_URI ? "✅ Loaded" : "❌ Missing"
);

// Connect Database
connectDB();

const app = express();

// Trust Nginx reverse proxy headers (X-Forwarded-For, etc.)
app.set("trust proxy", 1);

// Security
app.use(helmet());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.CLIENT_URL,
    ],
    credentials: true,
  })
);

app.use(express.json({ limit: "10kb" }));

// Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});

app.use("/api", limiter);

// Root Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Connect2Space Backend is Live",
  });
});

// API Routes
app.use("/api/contact", contactRoutes);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});