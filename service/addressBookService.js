import User from "../model/User";
const prompt = require("prompt-sync")({ sigint: true });



const entryDetails = (u) => {
    u.fullName = prompt("Enter fullName");
    u.addrress = prompt("Enter address");
    u.age = prompt("Enter age");
    u.number = prompt("Enter contact number");
    u.state = prompt("Enter state");
}

let u1 = entryDetails(new User());







