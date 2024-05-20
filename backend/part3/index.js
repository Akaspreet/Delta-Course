// const express = require("express");
// const app = express();

// let port = 8080;
// app.listen(port, ()=>{
//     console.log(`app is listening on port ${port}`);
// });

// app.use((req, res)=>{
//     console.log("request received");
//     // console.log("request received");
//     // res.send("this is a basic response");
//     res.send({
//         name: "apple", 
//         color: "red",
//     });
// });

// app.get("/", (req, res)=>{
//     res.send("you contacted root path");
// });
// app.get("/apple", (req, res)=>{
//     res.send("you contacted apple path");
// });
// app.get("/orange", (req, res)=>{
//     res.send("you contacted orange path");
// });
// app.get("*", (req, res)=>{
//     res.send("this path does not exist");
// });





const express = require("express");
const app = express();

let port = 8080;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("you contacted root path");
});
app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
});
app.get("/orange", (req, res) => {
    res.send("you contacted orange path");
});

// Wildcard route should be placed at the end
app.get("*", (req, res) => {
    res.send("this path does not exist");
});
