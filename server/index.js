const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

// to be able to connect to frontend
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
mongoose.connect(
  "mongodb+srv://mbot:ktQTi9Wt8hrrhGRp@cluster0.dwht6.mongodb.net/mern-project?retryWrites=true&w=majority"
);

//API Endpoints

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, users) => {
    if (err) {
      res.json(err);
    } else {
      res.json(users);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(newUser);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
