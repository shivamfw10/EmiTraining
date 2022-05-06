import axios, { Axios, AxiosResponse } from  'axios';

interface UserProps{
    id?:number;
    name?:string;
    age?:number;
    //question mark(?) make property optional
}

type Callback=()=>void;
export class User{
    events:{[key:string]:Callback[]}={};
    constructor(private data:UserProps){ }

    get(propName:string):(number|string){
        return this.data[propName];
    }

    set(update:UserProps):void{
        Object.assign(this.data,update);
    }
    
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

    fetch():void{
        axios.get(`http://localhost:3000/user/${this.get('id')}`)
        .then((reponse:AxiosResponse):void=>{
            this.set(reponse.data);
        })
    }

    save():void{
        const id = this.get('id')
        if(id){
            //put
            axios.put(`http://localhost:3000/user/${id}`,this.data)
        }else{
            //post
            axios.post('http://localhost:3000/user',this.data);
        }
    }

}



//https://www.npmjs.com/package/prompts