const express = require("express");
const app = express();

let port = 8080;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("you contacted root path");
});

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    res.send(`Welcome to the page of @${username}. Your ID is ${id}.`);
});
