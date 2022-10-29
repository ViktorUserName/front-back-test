const express = require("express");
const fs = require("fs");

const app = express();
const jsonParser = express.json();
const filePath = 'data/cards.json';

app.get("/api/cards", function(req, res){
    const content = fs.readFileSync(filePath, 'utf-8');
    const cards = JSON.parse(content);
    res.send(cards);
})
app.listen(3001)