const express = require("express")
const app = express();

const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    res.send(`Standard Get Response. Welcome ${user}!`);
});

app.post("/register", (req, res) => {
    console.log(req.body);
    // iss se undefined ho rha kyuki express ko smj nahi aarha ki kya data hia toh usko parse karna padegga 
    let {user, password} = req.body;
    res.send(`Standard Get Response. Welcome ${user}!`);
});
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});