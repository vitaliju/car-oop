export class Car {
  constructor(
    pavadinimas,
    modelis,
    spalva,
    bakoTalpa,
    kuroLikutis,
    vidKuroSanaudos100km
  ) {
    this.brand = pavadinimas;
    this.model = modelis;
    this.color = spalva;
    this.tankCapacity = bakoTalpa;
    this.fuelLeft = kuroLikutis;
    this.fuelConsumption = vidKuroSanaudos100km;
    this.isEngineOn = false;
    this.speed = 0;
  }

  turnEngineOn() {
    if (this.isEngineOn === false) {
      this.isEngineOn = true;
      return `Variklis ijungtas.`;
    } else {
      return `Ijungto variklio dar karta ijungti negalima.`;
    }
  }

  turnEngineOff() {
    if (this.speed > 0) {
      return `Pries bandydami isjungti varikli pilnai sustokite.`;
    }
    if (this.isEngineOn === true) {
      this.isEngineOn = false;
      return `Variklis isjungtas.`;
    } else {
      return `Isjungto variklio pakartotinai isjungti negalima.`;
    }
  }

  startDriving(km) {
    if (this.isEngineOn === false) {
      return `Pries pradedant vaziuoti ijunkite varikli.`;
    } else {
      this.speed = 90;
      this.fuelLeft = this.fuelLeft - (2 * this.fuelConsumption * km) / 100;
      return `Automobilis pradejo vaziuoti.`;
    }
  }

  driving(km) {
    if (this.isEngineOn === false) {
      return `Pries vaziuojant ijunkite varikli.`;
    } else {
      this.speed = 90;
      this.fuelLeft = this.fuelLeft - (this.fuelConsumption * km) / 100;
      return `Automobilis vaziuoja ${km} km atstuma.`;
    }
  }

  stopDriving() {
    if (this.speed > 0) {
      this.speed = 0;
      return `Automobilis sustojo.`;
    } else {
      return `Automobilis nejuda.`;
    }
  }

  fuelLeftInTank() {
    return `Automobilio bake liko ${this.fuelLeft} litru kuro.`;
  }

  fillFuelInTank(liters) {
    if (this.isEngineOn === true) {
      return `Pries pildami kura isjunkite varikli.`;
    } else {
      let filledLiters = 0;
      if (this.fuelLeft === this.tankCapacity) {
        return `Automobilio kuro bakas pilnas, daugiau uzpilti negalima.`;
      }
      if (liters > this.tankCapacity - this.fuelLeft) {
        filledLiters = (this.tankCapacity - this.fuelLeft).toFixed(2);
        this.fuelLeft = this.tankCapacity;
        return `Norejote uzpilti ${liters} litru kuro. Uzpilta ${filledLiters} litru kuro. Bakas pilnas. Kuro likutis bake ${this.fuelLeft} litru.`;
      }
      if (liters < this.tankCapacity - this.fuelLeft) {
        this.fuelLeft = this.fuelLeft + liters;
        return `Uzpilta ${liters} litru kuro. Kuro likutis bake ${this.fuelLeft} litru.`;
      }
    }
  }
}

/* class -> Car (Automobilis)
 
- pavadinimas (Audi)
- modelis (80)
- color
- kuro bako talpa (litrais)
- vidutines kuro sanaudos 100km
- ar ijungtas varyklis (default: false)
- greitis (default: 0)
 
metodai:
- ijungti varykli
    - ijungto varykli dar karto ijungti negalima, sugadinti starteri
- isjungti varykli
    - isjungto varyklio isjungti negalima...
- pradeti vaziuoti (greitis tiesiog tampa ne nulinis ir sunaudoja 2x litrus kuro sanaudu)
- vaziuoti (naudoja 1x litro kuro sanaudu)
- sustoti (greitis tiesiog tampa nulinis)
- kiek liko kuro?
- uzpilti kuro baka (kiek litrais)
*/
