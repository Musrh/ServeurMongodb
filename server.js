const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 Connexion MongoDB Railway
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connecté"))
  .catch(err => console.log(err));

// Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model("User", UserSchema);

// Routes
app.get("/", (req, res) => {
  res.send("API Railway fonctionne 🚀");
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

// 🔥 PORT Railway obligatoire
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Serveur lancé sur port " + PORT));
