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
var ZippyComponent = (function () {
    function ZippyComponent() {
        this.ishidden = true;
    }
    ZippyComponent.prototype.onClick = function () {
        this.ishidden = !this.ishidden;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ZippyComponent.prototype, "passenger", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ZippyComponent.prototype, "title", void 0);
    ZippyComponent = __decorate([
        core_1.Component({
            selector: 'zippy',
            template: "\n    \n    <div>\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading pointerCursor\"> {{passenger.name}},  {{passenger.lastName}}\n            \n            <i class = \"glyphicon\"\n                [ngClass] = \"{  \n                        'glyphicon-chevron-down': ishidden,\n                        'glyphicon-chevron-up': !ishidden }\" (click)=\"onClick()\"> \n </i> \n        </div>\n        <div *ngIf=\"!ishidden\" class=\"panel-body\"  >\n            Age: {{passenger.age}}\n            <ng-content></ng-content>\n            </div>\n    </div>\n    </div>\n ",
            styles: ["\n    .pointerCursor{cursor: pointer;}\n "]
        }), 
        __metadata('design:paramtypes', [])
    ], ZippyComponent);
    return ZippyComponent;
}());
exports.ZippyComponent = ZippyComponent;
//# sourceMappingURL=zippy.component.js.map