

Furniture 




class Fruits{
    constructor(color,shape){
        this.color = color;
        this.shape = shape;
    }
}

class Apple extends Fruits{
    constructor(isImported){
        super("Red", "round");
        this.isImported = isImported;
    }
}

let redFruit = new Apple(false);
console.log(redFruit.color);




        //CLASS REACTJS

class User{
    constructor(email, password, firstname, lastname){
        this.email = email;
        this.password = password;
        
    }
    fullName(){
        return this.firstname + " " + this.lastname;
    }
}

class PersonalInfo extends User{
    constructor(email, password, firstname, lastname){
        super(email, password);
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

let User1 = new User("yurie@kodego.ph", "12345679","Yurie", "Garcia");
let User2 = new User("mark@kodego.ph", "12345679","Mark", "Sanchez");

document.write(User2.firstname);






        //ARROW FUNCTION














