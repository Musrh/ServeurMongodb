const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🔹 Connexion MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/testdb")
  .then(() => console.log("MongoDB connecté"))
  .catch(err => console.log(err));

// 🔹 Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model("User", UserSchema);

// 🔹 Routes

// Ajouter utilisateur
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

// Récupérer utilisateurs
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(3000, () => console.log("Serveur lancé sur port 3000"));
