//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass");
const { Vehicle } = require("./vehicleBaseClass");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Sedan extends Vehicle { 
    constructor(maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService) {
    this.maximumPassengers;
    this.passenger;
    this.numberOfWheels;
    this.maximumSpeed;
    this.fuel;
    this.scheduleService;

    super(maximumPassengers, 6);
    super(passenger,0);
    super(numberOfWheels,4);
    super(maximumSpeed,4);
    super(fuel,100);
    super(scheduleService,false);
    }
}

loadPassenger(num){
    if (this.passenger < this.maximumPassengers) {
        return this.availableRoom == true;
        console.log("there is available room!!!");
    } 
    else {
        return this.availableRoom == false;
        console.log("no available room");
    }
}
    
start(){ 
    if (this.fuel > 0) {
    return this.start == true;
    console.log("start-there is fuel");
        } 
else {
    return this.start == false;
    console.log("no fuel to start");
    }      

}
     
scheduleService(mileage){
    if (this.mileage > 30000) {
    return this.timeformaintenance == true;
    console.log("mileage greater than 30000(time for maintenance)");
        } 
else {
    return this.timeformaintenance == false;
    console.log("mileage less than 30000(time for maintenance)");
    }       
}
           
        