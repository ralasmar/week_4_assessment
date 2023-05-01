const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const controller = require('./controller')
const { getCompliment, getFortune, selfCareGenerator, postAffirmation, joinEmail, deleteEmail, updateCatPhoto } = controller


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/selfCare", selfCareGenerator)
app.post("/api/affirmation", postAffirmation);
app.post("/api/email", joinEmail);
app.delete("/api/unsubscribe", deleteEmail);
app.put("/api/catPhoto", updateCatPhoto)



app.listen(4000, () => console.log("Server running on 4000"));