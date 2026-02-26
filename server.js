const express = require("express");
const app = express();

// Route test
app.get("/", (req, res) => {
  res.send("API Railway fonctionne 🚀");
});

// ⚠️ PORT dynamique pour Railway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Serveur lancé sur port", PORT);
});
