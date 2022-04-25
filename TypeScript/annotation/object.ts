const profile={
    name:'alex',
    age:21,
    cards:{
        lat:0,
        lng:15
    },
    setAge(age:number){
        this.age=age;
    }
};
// const {age}:{age:number} = profile;
// const {name,age}:{name:string,age:number}=profile;
const {cards:{lat,lng}}:{cards:{lat:number;lng:number}}=profile;