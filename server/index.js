import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

// mongoose.connect(
//   `mongodb+srv://mbot:${process.env.DATA_PASSWORD}@cluster0.dwht6.mongodb.net/test`
// );

mongoose.connect(
  "mongodb+srv://mbot:ktQTi9Wt8hrrhGRp@cluster0.dwht6.mongodb.net/mernproject?retryWrites=true&w=majority"
); //mongodb+srv://mbot:ktQTi9Wt8hrrhGRp@cluster0.dwht6.mongodb.net/?retryWrites=true&w=majority

app.listen(PORT, () => {
  console.log(`Server is listening on on port http://localhost:${PORT}`);
});
