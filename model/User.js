class User {
    fullName="";
    addrress="";
    age=0;
    number=0;
    state="";
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
    //...........

    getAddress(){
        return this.addrress;
    }
    setAddress(address){
        this.addrress=address;
    }
    deleteAddress(){
        this.addrress="";
    }
    //.............
    getAge(){ return this.age;}
    setAge(age){ this.age=age;}
    deleteAge(){ this.age=0;}

    //.......
};