const express = require("express");
const app = express();

// Route test
app.get("/", (req, res) => {
  res.send("🚀 Server Railway minimal fonctionne !");
});

// PORT dynamique fourni par Railway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Serveur lancé sur le port", PORT);
});
