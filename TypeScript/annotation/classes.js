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
var Vehicle2 = /** @class */ (function () {
    function Vehicle2(color) {
        this.color = color;
    }
    Vehicle2.prototype.drive = function () {
        console.log('slowly');
    };
    Vehicle2.prototype.honk = function () {
        console.log('beep');
    };
    return Vehicle2;
}());
// const vehicle = new Vehicle1();
// vehicle.drive();
// vehicle.honk();
var Car1 = /** @class */ (function (_super) {
    __extends(Car1, _super);
    function Car1(wheels, color) {
        var _this = _super.call(this, 'voilet') || this;
        _this.wheels = wheels;
        return _this;
    }
    Car1.prototype.drive = function () {
        console.log("vroom");
    };
    Car1.prototype.license = function () {
        console.log("Yes");
    };
    Car1.prototype.startDriving = function () {
        this.license();
        this.honk();
    };
    return Car1;
}(Vehicle2));
var car_a = new Car1(10, 'red');
car_a.drive();
//car.honk();
car_a.startDriving();
console.log(car_a.color, car_a.wheels);
