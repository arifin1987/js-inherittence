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


let car1 = new Vehicle('Toyota', 'Corola', 'blue');

console.log(car1.getCarInfo());