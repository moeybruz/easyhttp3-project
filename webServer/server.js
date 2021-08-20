const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello Express!")
});

app.post('/hello', (req, res) => {
    let body = req.body;
    body.message = "Hello " + body.Name + ", You're an " + body.Profession + " and your age is " + body.Age;

    res.json(body);
});



app.listen(3000, () => {
    console.log("Server listening on port 3000!");
});