// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 🔹 Connexion MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connecté"))
  .catch(err => console.log("Erreur MongoDB :", err));

// 🔹 Schema & Model
const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model("User", UserSchema);

// 🔹 Routes

// Test serveur
app.get("/", (req, res) => {
  res.send("API Railway fonctionne 🚀");
});

// Récupérer tous les utilisateurs
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    console.log("Users trouvés :", users);
    res.json(users);
  } catch (err) {
    console.log("Erreur GET /users :", err);
    res.status(500).send("Erreur serveur");
  }
});

// Ajouter un utilisateur
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    console.log("Utilisateur ajouté :", user);
    res.json(user);
  } catch (err) {
    console.log("Erreur POST /users :", err);
    res.status(500).send("Erreur serveur");
  }
});

// 🔹 PORT Railway obligatoire
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Serveur lancé sur port " + PORT));
