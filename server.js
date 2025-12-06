import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/api/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: userMessage }]
    });

    res.json({ reply: response.choices[0].message.content });
  } 
  catch (err) {
    res.json({ reply: "Server Error 😭" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
