var oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary: function () {
        return "Name : ".concat(this.name, " \n Year : ").concat(this.year, " \n broken : ").concat(this.broken);
    }
};
//using interface
// const printVehicle=(vehicle:Vehicle):void=>{
//     console.log(`Name:${vehicle.name}`);
//     console.log(`Year:${vehicle.year}`);
//     console.log(`Broken:${vehicle.broken}`);
// }
var printVehicle = function (vehicle) {
    console.log(vehicle.summary());
};
// const printVehicle=(vehicle:{name:string; year:number; broken:boolean}):void=>{
//     console.log(`Name:${vehicle.name}`);
//     console.log(`Year:${vehicle.year}`);
//     console.log(`Broken:${vehicle.broken}`);
// };
printVehicle(oldCivic);
var softdrink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "My drink has ".concat(this.sugar, " grams of sugar");
    }
};
var printSummary = function (item) {
    console.log(item.summary());
};
printSummary(softdrink);
