const express = require("express");
const app = express();

app.get('/learn', (req, res) => {
    res.send({
        name: "Rest APi Learn",
    });
});

app.get('/rest', (req, res) => {
    res.send({
        name: "Rest APi Learn",
    });
});

app.listen(3001, () => {
    console.log(`Server started on port 3001`);
});

