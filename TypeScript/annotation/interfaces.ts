//always declare interface with First Capital letter
interface Vehicle{
    // name:string;
    // year:number;
    // broken:boolean;
    summary():string;
}
const oldCivic ={
    name:'civic',
    year:2000,
    broken:true,
    summary():string{
        return `Name : ${this.name} \n Year : ${this.year} \n broken : ${this.broken}`;
    }
};


//using interface
// const printVehicle=(vehicle:Vehicle):void=>{
//     console.log(`Name:${vehicle.name}`);
//     console.log(`Year:${vehicle.year}`);
//     console.log(`Broken:${vehicle.broken}`);
// }

const printVehicle=(vehicle:Vehicle):void=>{
    console.log(vehicle.summary());
}
// const printVehicle=(vehicle:{name:string; year:number; broken:boolean}):void=>{
//     console.log(`Name:${vehicle.name}`);
//     console.log(`Year:${vehicle.year}`);
//     console.log(`Broken:${vehicle.broken}`);
// };
printVehicle(oldCivic);

interface Reportable{
    summary():string;
}
const softdrink={
    color:'brown',
    carbonated:true,
    sugar:40,
    summary():string{
        return `My drink has ${this.sugar} grams of sugar`;
    }
};
const printSummary=(item:Reportable):void=>{
    console.log(item.summary());
}
printSummary(softdrink);
    