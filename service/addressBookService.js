import User from "../model/User.js";
import PromptSync  from "prompt-sync";
const prompt=PromptSync();

const SIZE=prompt("enter size ");
const userArr=[]
const entryDetails = (u) => {
    u.fullName = prompt("Enter fullName");
    u.addrress = prompt("Enter address");
    u.age = prompt("Enter age");
    u.number = prompt("Enter contact number");
    u.state = prompt("Enter state");
};

for(let i=0;i<SIZE;i++){
    let u=new User();
    entryDetails(u);
    userArr.push(u);
}
console.log(userArr);

//.........

const searchUser=(param,val)=>{
    for(let i=0;i<userArr.length;i++){
        if(param==1 && userArr[i].fullName==val) return userArr[i];
        if(param==2 && userArr[i].address==val) return userArr[i];
        if(param==3 && userArr[i].age==val) return userArr[i];
        if(param==4 &&  userArr[i].number==val) return userArr[i];
        if(param==5 && userArr[i].state==val) return userArr[i];
    }
    return `${param} not found`;
}


console.log(searchUser(3,"22"));

//

const sortUser=(param)=>{
    let res;
    if(param=="fullName"){
        userArr.sort((a,b)=>{
            return a.fullName.localCompare(b.fullName);
        });
    }
    if(param=="address"){
        userArr.sort((a,b)=>{
            return a.address.localCompare(b.address);
        });
    }
    if(param=="age"){
        userArr.sort((a,b)=>{
            return  parseInt(a.age)-parseInt(b.age);
        });
    }
    if(param=="number"){
        userArr.sort((a,b)=>{
            return parseInt(a.number)-parseInt(b.number);
        });
    }
    if(param=="state"){
        userArr.sort((a,b)=>{
            return a.state.localCompare(b.state);
        });
    }
}

sortUser("age");
console.log(userArr);



