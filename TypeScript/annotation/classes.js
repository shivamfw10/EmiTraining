var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle1 = /** @class */ (function () {
    function Vehicle1(color) {
        this.color = color;
    }
    Vehicle1.prototype.drive = function () {
        console.log('slowly');
    };
    Vehicle1.prototype.honk = function () {
        console.log('beep');
    };
    return Vehicle1;
}());
// const vehicle = new Vehicle1();
// vehicle.drive();
// vehicle.honk();
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(wheels, color) {
        var _this = _super.call(this, 'voilet') || this;
        _this.wheels = wheels;
        return _this;
    }
    Car.prototype.drive = function () {
        console.log("vroom");
    };
    Car.prototype.license = function () {
        console.log("Yes");
    };
    Car.prototype.startDriving = function () {
        this.license();
        this.honk();
    };
    return Car;
}(Vehicle1));
var car = new Car(10, 'red');
car.drive();
//car.honk();
car.startDriving();
console.log(car.color, car.wheels);
