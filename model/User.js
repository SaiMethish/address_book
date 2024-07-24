export default class User {
    constructor() {
        this.fullName = "";
        this.addrress = "";
        this.age = 0;
        this.number = "";
        this.state = "";
    }
    //read
    getFullName() {
        return this.fullName;
    }
    //create and update
    setFullName(fullName) {
        this.fullName = fullName;
    }
    //delete 
    deleteFullName() {
        this.fullName = "";
    }
    //...........

    getAddress() {
        return this.addrress;
    }
    setAddress(address) {
        this.addrress = address;
    }
    deleteAddress() {
        this.addrress = "";
    }
    //.............
    getAge() { return this.age; }
    setAge(age) { this.age = age; }
    deleteAge() { this.age = 0; }

    //.......
    getNumber() { return this.number; }
    setNumber(number) { this.number = number; }
    deleteNumber() { this.number = ""; }
    //......

    getState() { return this.state; }
    setState(state) { this.state = state; }
    deleteState() { this.state = ""; }
    //.....
    printDetails() {
        return `fullname= ${this.fullName} address= ${this.addrress} age= ${this.age}
        number= ${this.number} state=${this.state}`;
    }
};

