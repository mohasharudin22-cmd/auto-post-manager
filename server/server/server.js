const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    app: "Auto Post Manager Server",
    status: "running"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server berjalan di port ${PORT}`);
});
