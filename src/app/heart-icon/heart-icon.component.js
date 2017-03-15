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
var HeartComponent = (function () {
    function HeartComponent() {
        this.likeCounter = 10;
        this.isLiked = false;
    }
    HeartComponent.prototype.onClick = function () {
        this.isLiked = !this.isLiked;
        this.isLiked ? this.likeCounter += 1 : this.likeCounter -= 1;
    };
    HeartComponent = __decorate([
        core_1.Component({
            selector: 'hearticon',
            templateUrl: 'app/heart-icon/heart-icon.template.html',
            styles: ["\n    .glyphicon-heart {\n        color: #ccc;\n        cursor: pointer;\n    }\n    .HeartPink{\n        color: deeppink;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], HeartComponent);
    return HeartComponent;
}());
exports.HeartComponent = HeartComponent;
//# sourceMappingURL=heart-icon.component.js.map