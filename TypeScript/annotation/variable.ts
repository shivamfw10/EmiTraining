// const apples:number =5;
// console.log(apples);

// let m:number=10;
// m=20;
// console.log(m);

//let car:number=10;
// let speed:string='fast';
// let hasName:boolean = true;
// let nothingMuch:null = null;
// let nothing:undefined=undefined;

// let now:Date = new Date();

// //Array
// let colors:string[]=['red','green','blue'];

// let myNumbers:number[]=[1,2,3];

// let truth:boolean[]=[true,true,false];

//classes

// class Car {

// }
// let car:Car = new Car();

//Object literal

// let point:{x:number;y:number} ={
//     x:10,
//     y:20
// };


//Function

const logNumber:(i:number)=>void=(i:number)=>{
    console.log(i)
}
logNumber(10)

const json ='{"x":10,"y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates);//{ x: 10, y: 20 }

let words = ["red","green","blue"];
let foundWord=false;

for(let i=0;i<words.length;i++){
    if(words[i]==='green'){
        foundWord=true;
    }
}
console.log(foundWord);

//variable whoose type cannot be inferred correctly

let numbers =[-10,-1,12];
let numberAboveZero:boolean|number=false;

for(let i=0;i<numbers.length;i++){
    if(numbers[i]>0){
        numberAboveZero=numbers[i];
    }
};
console.log(numberAboveZero);