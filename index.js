class Vehicle{
    constructor(name, model, color){
        this.name = name;
        this.model = model;
        this.color = color;
    }

    getCarInfo(){
        return `car name is: ${this.name} car color is: ${this.color}`
    }
}


class Customer extends Vehicle{
    constructor(name, model,color,phone, memberShip){
        super(name,model,color);
        this.phone = phone;
        this.memberShip = memberShip;
    }
}

let customer1 = new Customer('toyota','2000','black','1234','yes');
console.log(customer1);