// Practice Ques 

// let para1 = document.createElement("p");
// para1.innerText = "Hey I'm Red!";
// document.querySelector("body").append(para1);
// para1.classList.add("red")

// let h3 = document.createElement("h3");
// h3.innerText = "I am Blue h3!";
// document.querySelector("body").append(h3);
// h3.classList.add("blue");

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");
// h1.innerText = "I'm in a div";
// para2.innerText = "Me Too";

// div.append(h1, para2);
// div.classList.add("box");
// document.querySelector("body").append(div);




// Assign Ques 1
let button  = document.createElement("button");
let input = document.createElement("input");

button.innerText = "Click Me!";
document.querySelector("body").appendChild(input);
document.querySelector("body").appendChild(button);


// ques 2 
button.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

// ques 3
button.classList.add("btn-bg");

let heading = document.createElement("h1");
heading.innerText = "DOM Practice";
document.querySelector("body").append(heading);
heading.classList.add("dom");



tagg = document.createElement("p");
tagg.innerText = "Apna College Delta Practice";
document.querySelector("body").append(tagg);
tagg.classList.add("hk");

