require("dotenv").config();
const initializeFirebase = require("./constants/firebase-config");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

initializeFirebase();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


app.use("/", require("./routes"));

app.listen(process.env.PORT || 8080, () => {
    console.log("Server is running on", process.env.PORT || 8080);
});


