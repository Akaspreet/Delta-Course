const express = require("express");
const app = express();

let port = 8080;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
app.get("/", (req, res) => {
    res.send("you contacted root path");
});
app.get("/search", (req, res)=>{
    let {q} = req.query;
    if(!q){
        res.send("<h1>Nothing searched</h1>")
    }
    res.send(`<h1>Search result for query: ${q}</h1>`);
});