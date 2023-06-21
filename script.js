const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

let team = players;
let team1 = ["John", "Bob", "Alice", "Poppy"];
let cap1 = {
	name: "John Doe",
	age: 25,
};

console.log(team);
console.log(team1);
console.log(cap1);
// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
