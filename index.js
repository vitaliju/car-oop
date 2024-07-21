import { Car } from "./js/Car.js";

const audi = new Car("Audi", "80", "Grey", 66, 40, 7);
console.log(audi);

console.log(audi.turnEngineOn());
console.log(audi.turnEngineOn());
console.log(audi.turnEngineOff());
console.log(audi.turnEngineOff());
console.log(audi.turnEngineOn());
console.log(audi.startDriving(10));
console.log(audi.driving(100));
console.log(audi.stopDriving());
console.log(audi.turnEngineOff());
console.log(audi.fuelLeftInTank());
console.log(audi.fillFuelInTank(10));
console.log(audi.turnEngineOn());
console.log(audi);
console.log(audi.turnEngineOff());
console.log(audi.fillFuelInTank(30));
console.log(audi);
console.log(audi.fillFuelInTank(66));
