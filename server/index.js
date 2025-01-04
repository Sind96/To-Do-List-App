const express = require("express");
const app = express();
var cors = require("cors");
const mongoose = require("mongoose");

const port = 3000;
const router = require("./router");

app.use(cors());
app.use(express.json());
app.use(router);

(async function () {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(port);
    console.log(
      `Server running on PORT ${port} and Database has successfully connected!🕊️`
    );
  } catch (error) {
    console.log(`Server & Database could not connect:`, error);
  }
})();
