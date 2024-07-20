import { Car } from "./js/Car.js";

const audi = new Car("Audi", "80", "Grey", 66, 40, 7);
console.log(audi);

console.log(audi.turnEngineOn());
console.log(audi.turnEngineOn());
console.log(audi.turnEngineOff());
console.log(audi.turnEngineOff());
console.log(audi.turnEngineOn());
console.log(audi);
console.log(audi.inStartDrivingModeKm(10));
console.log(audi.inDrivingModeKm(100));
console.log(audi.stopDriving());
console.log(audi.turnEngineOff());
console.log(audi.fuelLeftInTankLiters());
console.log(audi.fillTankWithFuel(10));
console.log(audi.turnEngineOn());
console.log(audi);
console.log(audi.turnEngineOff());
console.log(audi.fillTankWithFuel(30));
console.log(audi);
console.log(audi.fillTankWithFuel(66));
