const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");
// for dynamic id 
const { v4: uuidv4 } = require("uuid");
uuidv4();



app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

let posts = [
    {
        id: uuidv4(),
        username:"apnacollege",
        content: "I Love Coding"
    },
    {
        id: uuidv4(),
        username:"Akaspreet",
        content: "Continue Hard work"
    },
    {
        id: uuidv4(),
        username:"Abhay",
        content: "Work Smartly"
    }
]

app.get("/posts", (req, res) =>{
    // res.send("serving working well!");
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})
app.post("/posts", (req, res) => {
    console.log(req.body);
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    // res.send("post request working");
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    // console.log(id);
    let post = posts.find((p) =>id === p.id);
    // console.log(post);
    res.render("show.ejs", {post});

    // res.send("request working");
});

app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newcontent = req.body.content;
    let post = posts.find((p) =>id === p.id);
    post.content = newcontent;

    // console.log(newcontent);
    // console.log(id); 
    console.log(post);
    res.redirect("/posts");
    // res.send("patch request working");
});

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) =>id === p.id);
    res.render("edit.ejs", {post});

});

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) =>id !== p.id);
    res.send("delete success");
    res.redirect("/posts");

});