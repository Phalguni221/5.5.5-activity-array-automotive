//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass");
const { Vehicle } = require("./vehicleBaseClass");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Sedan extends Vehicle { 
    constructor(make, model, year, color, mileage, maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService) {
    super(make, model, year, color, mileage);
    this.maximumPassengers = 6;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 200;
    this.fuel = 100;
    this.scheduleService = false;
    this.start = false;
    this.availableRoom = false;
    this.timeforMaintenance = false;
    }
}

loadPassenger(num) 
    if (this.passenger < this.maximumPassengers) {
        return this.availableRoom == true;
        console.log("there is available room!!!");
    } 
    else {
        return this.availableRoom == false;
        console.log("no available room");
    }
   
    start()
    if (this.fuel > 0) {
    return this.start == true;
    console.log("start-there is fuel");
        } 
else {
    return this.start == false;
    console.log("no fuel to start");
    }      
  
scheduleService(mileage) 
    if (this.mileage > 30000) {
    return this.timeforMaintenance == true;
    console.log("mileage greater than 30000(time for maintenance)");
        } 
else {
    return this.timeforMaintenance == false;
    console.log("mileage less than 30000(time for maintenance)");
    }       

           
        