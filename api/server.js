import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve frontend
app.use("/public", express.static(path.join(__dirname, "../public")));
app.use("/uv", express.static(path.join(__dirname, "../uv")));

// homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// fallback
app.get("*", (req, res) => {
  res.redirect("/");
});

export default app;
