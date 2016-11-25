"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FloorPipe = (function () {
    function FloorPipe() {
    }
    FloorPipe.prototype.transform = function (num, precision) {
        if (precision === void 0) { precision = 0; }
        if (precision <= 0) {
            return Math.floor(num);
        }
        var tho = Math.pow(10, precision);
        return Math.floor(num * tho) / tho;
    };
    FloorPipe = __decorate([
        core_1.Injectable(),
        core_1.Pipe({ name: 'floor' }), 
        __metadata('design:paramtypes', [])
    ], FloorPipe);
    return FloorPipe;
}());
exports.FloorPipe = FloorPipe;

//# sourceMappingURL=floor.js.map
