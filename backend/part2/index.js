const figlet = require("figlet");
// var figlet = require("figlet");

figlet("Hnji, Kidaan Phir Ustaad", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});