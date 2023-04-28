const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const controller = require('./controller')
const { getCompliment, getFortune } = controller


app.get("/api/compliment", getCompliment);
app.get("http://localhost:4000/", getFortune)


app.listen(4000, () => console.log("Server running on 4000"));
