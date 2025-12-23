import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve static files
app.use(express.static(path.join(__dirname, "../public")));
app.use("/uv", express.static(path.join(__dirname, "../uv")));

// homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

export default app;
