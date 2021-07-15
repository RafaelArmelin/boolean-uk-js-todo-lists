/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", users);

console.log("todos: ", todos);


// - Display an alert with the username and all the todos titles that belong to that user 

// - Create an alert that lists all users, with their ids, names and what city they're from

let id = users[0].id;
let name = users[0].name;
let address = users[0].address.city;

let message = "";

for (let i = 0; i < users.length; i++){
const id = users[i].id;
const name = users[i].name;
const city= users[i].address.city;

const row = `${id} | ${name} | ${city} \n`;

message = message + row;

console.log(message)
}

 alert(message);

 console.log(users[0].id , users[0].name , users[0].address.city);



 //- Prompt the user for a user id

 let userId = prompt("Who's ID do you wanna check? Use and ID number.");