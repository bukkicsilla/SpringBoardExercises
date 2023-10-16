console.log("Part 1");
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    console.log("Beep");
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."
const str = myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."
console.log(str);

console.log("Part 2");

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
console.log(myFirstCar.toString()); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk(); // "Beep."
console.log(myFirstCar.numWheels); // 4

console.log("Part 3");

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    console.log("VROOM!!!");
  }
}
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

const str2 = myFirstMotorcycle.toString();
console.log(str2);
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk(); // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
console.log(myFirstMotorcycle.numWheels); // 2

console.log("Part 4");
class Garage {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }
  add(vehicle) {
    //console.log("type of vehicle", vehicle instanceof Vehicle);
    if (vehicle instanceof Vehicle) {
      if (this.vehicles.length < this.capacity) this.vehicles.push(vehicle);
      else return "Sorry, we're full.";
    } else {
      //throw new Error("Only vehicles are allowed in here!");
      return "Only vehicles are allowed in here!";
    }
  }
}
let garage = new Garage(2);
console.log(garage.vehicles); // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
console.log(garage.vehicles); // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
console.log(garage.vehicles); // [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."
console.log(garage.vehicles);
