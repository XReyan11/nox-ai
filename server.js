const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve static public folder
app.use(express.static(path.join(__dirname, "public")));

// Chat API (Dummy reply, later AI connect)
app.post("/api/chat", (req, res) => {
    const userMsg = req.body.message || "";
    res.json({ reply: "You said: " + userMsg });
});

// Railway PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
