// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((response)=>{
//     console.log(response);
//     return response.json();
// })
// .then((data)=>{
//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log("Error -", err);
// });

// now by promise chaining



// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     console.log("Second request:");
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data2=", data2.fact);
// })
// .catch((err)=>{
//     console.log("Error -", err);
// });

// axios first need to be install or directly add in the  script tag of html file 
let url = "https://catfact.ninja/fact";

async function getfacts(){
    try{
        let res = await axios.get(url);
        // console.log(res.data);
        return res.data.fact;
    }
    catch(e){
        console.log("error -", e);
        // throw e;
        return "No fact found";
    }
}

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    
    let fact = await getfacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
    

});


