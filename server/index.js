const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const app = express();
const PORT = process.env.PORT || 3000;

// mongoose.connect(
//   `mongodb+srv://mbot:${process.env.DATA_PASSWORD}@cluster0.dwht6.mongodb.net/test`
// );

mongoose.connect(
  "mongodb+srv://mbot:ktQTi9Wt8hrrhGRp@cluster0.dwht6.mongodb.net/mern-project?retryWrites=true&w=majority"
); //mongodb+srv://mbot:ktQTi9Wt8hrrhGRp@cluster0.dwht6.mongodb.net/?retryWrites=true&w=majority

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

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
