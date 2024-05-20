const express = require("express");
const app = express();

const path = require("path");
const port = 8080;

// by default ye public ke naam se likha jaata folder ka name

app.use(express.static("public"));
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res) => {
    // res.send("this is home");
    res.render("home.ejs");
});


app.get("/ig/:username", (req, res) => {
    let {username} = req.params;

    const instaData = require("./data.json");
    // console.log(instaData);
    const data = instaData[username];
    console.log(data);
    // this condition for like in data.json it is given of only data of cats and dogs and for others to tacke it we make error page to show 
    if(data){
        res.render("instagram2.ejs", {data});
    }
    else{
        res.render("error.ejs");
    }

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