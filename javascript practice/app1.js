// Q1

// let num = 50;
// if(num % 10 == 0){
//     console.log("Good Number");
// }
// else{
//     console.log("Bad Number");
// }

// Q2

// let name = prompt("Enter your Name:");
// let age = prompt("Enter your Age:");


// alert(`${name} is ${age} years old.`);


// Q3

// let month = 3;
// switch(month){
//     case 1 : console.log( "January, February", "March" ); break;
//     case 2 : console.log( "April, May", "June" ); break;
//     case 3 : console.log( "July, August", "September" ); break;
//     case 4 : console.log( "October, November", "December" ); break;
//     default: console.log( "Invalid Month!" ) ;
// }


// Q4

// let name = "Apples"
// if(name[0] === 'a' || name[0] === 'A' || Number.length >5){
//     console.log("Golden String");
// }else {
//     console.log("Not Golden String");
// }


// Q5

// let a = 1;
// let b = 9;
// let c = 3;
// if(a>b && a>c){
//     console.log(a + " is the largest number.");
// } else if (b>a && b>c) {
//     console.log(b + " is the largest number.")
// } else{
//     console.log(c + " is the largest number.");
// }


//Q6
// let a = 32;
// let b = 96;
// if((a%10) == (b%10)){
//     console.log("Same Digit");
// }
// else{
//     console.log("Not Same Digit.");
// }




// Part 5 ka ans 
// q1

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;
// for(let i = 0; i<arr.length;i++){
//     if(num == arr[i]){
//         arr.splice(i, 1);
//         i--;
//     }    
// }
// console.log(arr);

// q2
// let num = 287152;
// let count = 0;
// while(num > 0){
//     count++;
//     num = Math.floor(num/10);
// }
// console.log(count);

// q3 

// let num = 287152;
// let sum = 0;
// while(num > 0){
//     let rem = num%10;
//     sum += rem;
//     num = Math.floor(num/10);
// }
// console.log(sum);



// q4

// let num = 5;
// let factorial = 1;
// for(let i=1; i<=num; i++){
//     factorial *= i;
// }
// console.log(`factorial is ${factorial}`);


// q5
let arr = [1, 2, 3, 5, 9];
let largest = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i]>largest){
        largest = arr[i];
    }
}
console.log(`largest  number in the array is ${largest}`);