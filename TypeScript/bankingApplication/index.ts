import axios, { Axios, AxiosResponse } from  'axios';

interface UserProps{
    id?:number;
    accountNum?:String;
    accountType?:String;
    amount?:Number;
    name?:String;
    age?:Number;
    email?:String;
    location?:String;
    state?:String;
    country?:String;
}

type Callback=()=>void;
export class User{
    events:{[key:string]:Callback[]}={};
    constructor(private data:UserProps){ }
    
    get(propName:string):(number|string){//get data
        return this.data[propName];
    }

    // set(update:UserProps):void{
    //     Object.assign(this.data,update);
    // }

    on(eventName:string, callback:Callback):void{
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName]= handlers;
    }

    trigger(eventName:string):void{
        const handlers = this.events[eventName];
        if(!handlers||handlers.length===0){
            return;
        }

        handlers.forEach(callback=>{
            callback();
        })
    }
    save():void{//store user data
        const id = this.get('id');
        if(id){
            axios.put(`http://localhost:3000/user/${id}`,this.data);
            console.log("Data registered successfully");
        }
        else
            axios.post('http://localhost:3000/user',this.data);
    }
}