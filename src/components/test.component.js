"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TestComponent = (function () {
    function TestComponent() {
        this._magicNumber = 0;
    }
    TestComponent.prototype.increment = function () {
        this._magicNumber++;
        console.log(this._magicNumber);
    };
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        selector: "test",
        template: "<p>Hello from library : {{_magicNumber}}</p> <button (click)=\"increment()\">Increment</button>"
    })
], TestComponent);
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map