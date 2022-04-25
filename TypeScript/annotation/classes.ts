class Vehicle2{
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


class Car1 extends Vehicle2{
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

const car_a = new Car1(10,'red');
car_a.drive();
//car.honk();
car_a.startDriving();
console.log(car_a.color,car_a.wheels);