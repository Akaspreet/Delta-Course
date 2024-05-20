const express = require("express");
const app = express();

const path = require("path");
const port = 8080;

app.set("view engine", "ejs");

// agar maanlo main part4 ki parent directory that is backend vahan se server run karta by typing commnad(nodemon part4/index2.js)
// toh ye views ke folder ko backend ke folder me search karega so iss se kya hogga ki agar hum localhost:8080/hello se back jaaege home page pe 
// ye error dega so 
// ye cheej avoid karne ke liye hum kya karege ki hum line add karege 

app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res) => {
    // res.send("this is home");
    res.render("home.ejs");
});

app.get("/hello", (req, res) => {
    res.send("Hello paaji");
    // res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
    let diceval = Math.floor(Math.random() * 6) + 1;
    // here there are two ways to do so 
    
    // res.render("rolldice.ejs");

    // these methods like ki jab database se nikalna ho 

    
    // res.render("rolldice.ejs", {num: diceval});
    // agar ye use karega toh tjughe rooldice.ejs me num dena hogga poore formula ki jagah 
    res.render("rolldice.ejs", {diceval});
    // res.render("home.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
    console.log(`hnji chal rha apne server`);
})