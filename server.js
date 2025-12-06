import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

// Fix for ES Modules __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve Frontend
app.use(express.static(path.join(__dirname, "public")));

// Basic API route
app.post("/api/chat", (req, res) => {
    const userMsg = req.body.message || "";
    res.json({ reply: "You said: " + userMsg });
});

// Default: load index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
