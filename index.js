/* 
document.getElementById("myH1").textContent = "Hello, World!";
document.getElementById("myP").textContent = "This is my first JavaScript code!";
document.getElementById("myH1").style.color = "blue";
document.getElementById("myH1").style.backgroundColor = "lightgray";
console.log("Hello, There")


let username;

username = window.prompt("Enter your name:");

console.log("Username is: " + username); 
*/

// this exercise is made just to show why we use constants(variables that do not change their value) in programming
const PI = 3.14;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myInput").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH2").textContent = "Circumference is: " + circumference + "cm"; 

};