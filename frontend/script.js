// Check if JavaScript is connected
console.log("JavaScript is connected!");

// Variables
let name = "Isha";
let role = "Web Developer";

console.log(name);
console.log(role);

// Function for button click
function sayHello() {
  alert("Hello, welcome to my portfolio!");
}

// Change paragraph using JavaScript
let introText = document.getElementById("intro");
introText.style.color = "blue";
introText.innerText = "This text was changed using JavaScript!";

// Array of projects
let projects = [
  "Portfolio Website",
  "Blog App",
  "Admin Dashboard"
];

// Display projects on webpage
let projectList = document.getElementById("projectList");

projects.forEach(function(project) {
  let li = document.createElement("li");
  li.innerText = project;
  projectList.appendChild(li);
});

// Array of blog objects
let blogs = [
  { title: "Learning JavaScript", author: "Isha" },
  { title: "My MERN Journey", author: "Isha" }
];

// Display blogs on webpage
let blogList = document.ge
const greet = () => {
  console.log("Welcome to ES6 JavaScript!");
};

greet();
