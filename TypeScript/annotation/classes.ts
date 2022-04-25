class Vehicle1{
    color:string;

    constructor(color:string){
        this.color=color;
        
    }

   public drive():void{
        console.log('slowly')
    }
   protected honk():void{
        console.log('beep');
    }
    
    
}

// const vehicle = new Vehicle1();
// vehicle.drive();
// vehicle.honk();


class Car extends Vehicle1{
    constructor(public wheels:number, color:string){
        super('voilet');
    }
   public drive(): void {
        console.log("vroom");
    }
    private license():void{
        console.log("Yes");
    }
    startDriving():void{
        this.license();
        this.honk();
    }
}

const car = new Car(10,'red');
car.drive();
//car.honk();
car.startDriving();
console.log(car.color,car.wheels);