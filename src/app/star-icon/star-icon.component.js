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
var StarComponent = (function () {
    // @Output('favoriteChange') change = new EventEmitter();
    function StarComponent() {
        //o-> @Input('is-favorite') isFavorite : boolean; //-> se le pone el alias/nombre publico de isFavorite
        this.change = new core_1.EventEmitter();
        this.isFavorite = false;
    }
    StarComponent.prototype.onClick = function () {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], StarComponent.prototype, "isFavorite", void 0);
    __decorate([
        //ejemplo Input
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StarComponent.prototype, "change", void 0);
    StarComponent = __decorate([
        core_1.Component({
            selector: 'staricon',
            templateUrl: 'app/star-icon/star-icon.template.html',
            styles: [" \n        .glyphicon-star{\n            color: orange;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], StarComponent);
    return StarComponent;
}());
exports.StarComponent = StarComponent;
//# sourceMappingURL=star-icon.component.js.map