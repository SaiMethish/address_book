import User from "../model/User.js";
import PromptSync  from "prompt-sync";
const prompt=PromptSync();

const entryDetails = (u) => {
    u.fullName = prompt("Enter fullName");
    u.addrress = prompt("Enter address");
    u.age = prompt("Enter age");
    u.number = prompt("Enter contact number");
    u.state = prompt("Enter state");
};

let u1=new User();
entryDetails(u1);
console.log(u1.printDetails());




