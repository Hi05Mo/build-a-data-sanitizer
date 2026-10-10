const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({extended : true}));

const { inputCleaner, inputValidator } = require("./middleware");

app.get("/", (req, res) => {
   res.redirect("/form");
});

app.get("/form", (req, res) => {
   res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/submit", inputCleaner, inputValidator, (req, res) => {
   res.json({
     username : req.body.username,
     comment : req.body.comment
   });
});

app.listen(3000, () => {
    console.log("Server listining on port 3000");
});
