// const add =(a:number,b:number):number=>{
//     return a+b;
// }

// const add=(a:number,b:number)=>{
//     return a+b;
// }

// const subtract =(a:number,b:number):number=>{
//     return a-b;
// }

// function divide(a:number,b:number):number{
//     return a/b;
// }

// const multiply = function(a:number,b:number):number{
//     return a*b;
// }


// const logger =(meesage:string):void=>{
//     console.log(message);
// }

// const throwError=(message:string):void=>{
//   if(!message){
//     throw new Error(message);
//   }
// }


const todayWeather={
    date: new Date(),
    weather:'sunny',
};

const logWeather=(forecast:{date:Date,weather:string})=>{
    console.log(forecast.date);
    console.log(forecast.weather);
}

logWeather(todayWeather);