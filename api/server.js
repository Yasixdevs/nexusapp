const express = require("express");
const cors =  require("cors");

const api = express();
api.use(cors());
api.use(express.json());
app.use("/post", require("./routes/post.routes.js"));
api.listen(3000, () => {
    console.log("Serveur lancé sur http://localhost:3000");
});