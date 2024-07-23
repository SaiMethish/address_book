class User {
    fullName;
    addrress;
    age;
    number;
    state;
    //read
    getFullName() {
        return this.fullName;
    }
    //create and update
    setFullName(fullName) {
        this.fullName=fullName;
    }
    //delete 
    deleteFullName(){
        this.fullName="";
    }
};

