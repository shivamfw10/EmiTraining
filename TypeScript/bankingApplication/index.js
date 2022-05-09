"use strict";
exports.__esModule = true;
exports.User = void 0;
var axios_1 = require("axios");
var User = /** @class */ (function () {
    function User(data) {
        this.data = data;
        this.events = {};
    }
    User.prototype.get = function (propName) {
        return this.data[propName];
    };
    // set(update:UserProps):void{
    //     Object.assign(this.data,update);
    // }
    User.prototype.on = function (eventName, callback) {
        var handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    };
    User.prototype.trigger = function (eventName) {
        var handlers = this.events[eventName];
        if (!handlers || handlers.length === 0) {
            return;
        }
        handlers.forEach(function (callback) {
            callback();
        });
    };
    User.prototype.save = function () {
        var id = this.get('id');
        if (id) {
            axios_1["default"].put("http://localhost:3000/user/".concat(id), this.data);
            console.log("Data registered successfully");
        }
        else
            axios_1["default"].post('http://localhost:3000/user', this.data);
    };
    return User;
}());
exports.User = User;
