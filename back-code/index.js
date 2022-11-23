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
https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-15153869/create-a-full-stack-website?autoplay=true&courseClaim=AQEyvgY84ISphgAAAYShmsVDhel5ZQP_q6bUfVrq0L-t_5RR-nWoGwfSAH8TeAVAYoMP4vrcSjdfFN-smv5v8qgiwpaau05icofULBH6OCoFkbzoH8-p9ydVCAOe5DScizuxMBbmhHCnMAine4g7Y0Be23NY7vjj-YyAHVmIIM8Ztn2IwDtBz8SoGlYA-G6t33B02bkPfeYJat9yt4heltSayTuJfMmdnIjJ4eEnVJc4SCrgZhoXqdDIkvfcycaZW81Wia7cEgaQVw6zWVaVPABYQXqXV_dykL2TEy9ty8EfQlWFP33ewWg0IosBa4wN5twT4Wdu7yyCYu9j7lPee6zGF1IpMsAwR30tqlzsPLLoJMmRdM7cxfYsaZXuI-pDX8_qjGCgva_KEmPZUr5mxVkJxwDJnmkBrSJ3-xtLGj68vFgv5bXkwhXwJv-eyxdO3gGejEmy-d2CqENhIV-DeXPhMXT9brHarHVGHLRQsYbwmGwIVYBJ5xc7mT-71_gzuCZN7sgwewGFs0m7fAG7KtfzqNPbgf6JATf6NjZ8gnXblvHHYeZVIsO2hoRmcB1BzT-R3M8m7qvhJMnl8aKepghJRM0kvEhRWY-_IhrTIYGaPrQwKlDr80_sZ_wZCEAY4ticloQssZZ0RfprLKREmeGSBU5ix-pqNGWSgjV9CHKNDJ6LW9yHfwsHLioIQhzqrb28MI2nXrZx99YInnK4zukTOEi6wuuFiBQl6_NuW7LvupoEH9xiohZ9yLO5uXMTNANB_ea4KboOAsYj2n0sj4jFr5kuMZcov7uWet9DWOHBd84LLqV8J3OqEeXtxtfA9fzF2jPOtF0LQb3iB7JVppbNZSd05oGbbJvPEe9A8GqX6Gym7qjmuH43P_jvkSmrpMTVkFyWYKHGxXPdvg9SS-iVC8BN37NV4NXW0RDEHwH_wk-tfPuT5Tl5ZVMD4nd1woHhsVxONiqHblpMXaaJ4xENR9yhImMKjRBdiRINTRRY7PHRXOhNYCBc4wc5-RdGVufnTFjoDLeTMw3YuBOBg0LTTkPODmAxX2g
