import express from "express";
import OpenAI from "openai";
import path from "path";

const app = express();
app.use(express.json());

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const reply = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: userMessage }]
    });

    res.json({ reply: reply.choices[0].message.content });
  } catch (error) {
    console.log(error);
    res.json({ reply: "Server Error ⚠️" });
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Server running on " + port));
