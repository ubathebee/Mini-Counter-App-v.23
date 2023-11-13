// function increament() {
//   console.log(1);
//   console.log(2);
//   console.log(3);
//   console.log(4);
//   console.log(5);
// }

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function lapo() {
//   total = lap1 + lap2 + lap3
//   console.log(total);
// }
// lapo()

// let lapCompleted = 0;
// function finale() {
//   lapCompleted = lapCompleted + 1;
// }
// finale();
// finale();
// finale();
// console.log(lapCompleted)


// let username = "Musa";
// let message = "you have 3 new notifications";
// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser);

// let welcomeEl = document.getElementById("welcome-el")
// let mname = "Uba Rabiu";
// let greeting = "Welcome back ";
// function solve() {
//   nameGreet = greeting + mname;
// }
// solve();
// welcomeEl.innerText = nameGreet;
// let emoji = "👋"
// welcomeEl.innerText += " " + emoji


let countEl = document.getElementById("count-el");
let count = 0;

let saveEl = document.getElementById("save-el");


function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  entries = count + " - ";
  saveEl.textContent += entries
  countEl.textContent = 0;
  count = 0;
}
save();
