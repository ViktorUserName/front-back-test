const express = require("express");
const fs = require("fs");
const cors = require("cors")

const app = express();
const jsonParser = express.json();
const filePath = 'data/cards.json';

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  }

// app.use(cors())

app.get("/api/cards", cors(corsOptions), function(req, res){
    const content = fs.readFileSync(filePath, 'utf-8');
    const cards = JSON.parse(content);
    res.send(cards);
})
app.listen(3001)