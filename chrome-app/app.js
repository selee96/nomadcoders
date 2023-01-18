// Array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek);

// Add one more day to the array.
daysOfWeek.push("sun");

console.log(daysOfWeek);



// object
const player = {
    name: "selee",
    points: 10,
    beauty : true
}

player.points = 12;
player.lover = "hg";

// console.log(player);
// console.log(player.name);



// function
function sayHello(name) {
    console.log("Hello! " + name);
}

// sayHello("selee");

function plus (firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
function divide (a, b) {
    console.log(a / b);
}
// plus(34, 43);
// divide(4, 2);



// object + function
const players = {
    name : "selee",
    sayHello : function(person) {
        return "Hello! " + person;
    }
};

// console.log(players.sayHello("hg"));





function anounce(age) {
    if(isNaN(age)) {
        alert("Please write a number");
        
        const age_ = parseInt(prompt("How old are you?"));
        anounce(age_);
        return;

    } else if (age < 18) {
        alert("You are too young.");
        return;
    } else {
        alert("You can drink");
        return;
    }
}

// const age = parseInt(prompt("How old are you?"));
// anounce(age);



const title = document.getElementById("title");

// console.dir(title);

title.innerText = "Got you!";



const hellos = document.getElementsByClassName("hello");
// console.log(hellos);

const title_ = document.getElementsByTagName("h1");
// console.log(title_);

const title2 = document.querySelector(".hello:first-child");
console.log(title2);

const title3 = document.querySelectorAll(".hello h1");
console.log(title3);

title.style.color = "blue";



function hondleTitleClick() {
    title.style.color = "green";
}
function headleMouseEnter() {
    title.innerText = "mouse is here~~~";
}
function headleMouseLeave() {
    title.innerText = "mouse is gone~~~"
}

function hadleWindowResize() {
    document.body.style.backgroundColor = "tomato";   
}
function hadleWindowCopy() {
    alert("copier!");
}
function hadleWindowOffline() {
    alert("SOS no WIFI!");
}
function hadleWindowOnline() {
    alert("All GOOD~~~");
}
title.addEventListener("click", hondleTitleClick);
title.addEventListener("mouseenter", headleMouseEnter);
title.addEventListener("mouseleave", headleMouseLeave);

// title.onclick = hondleTitleClick;
// title.onmouseenter = headleMouseEnter;
// title.onmouseleave = headleMouseLeave;


window.addEventListener("resize", hadleWindowResize);
window.addEventListener("copy", hadleWindowCopy);
window.addEventListener("offline", hadleWindowOffline);
window.addEventListener("online", hadleWindowOnline);