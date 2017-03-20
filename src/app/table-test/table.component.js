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
var passengers_service_1 = require('../zippy/passengers.service');
var TableComponent = (function () {
    function TableComponent(passengerService) {
        this.passengers = passengerService.getPassengers(); //esto se reemplaza por el get que va a traer la info del server / json
    }
    TableComponent = __decorate([
        core_1.Component({
            selector: 'passengers-table',
            template: "\n        \n            <div class=\"panel panel-info\">\n                <div class=\"panel-heading\">\n                Passengers\n                </div>\n\n\n                <table  class=\"table\">\n                <thead>\n                    <tr>\n                        <th>Name</th><th>Last Name</th><th>Age</th>\n                    </tr>\n                </thead>\n                <tbody *ngFor = \"let passenger of passengers\">\n                    <tr>\n                        <td>{{passenger.name}}</td>\n                        <td>{{passenger.lastName}}</td>\n                        <td>{{passenger.age}}</td>\n                    </tr>\n                <tbody>\n                </table>\n           </div>\n        \n    ",
            providers: [passengers_service_1.PassengersService]
        }), 
        __metadata('design:paramtypes', [passengers_service_1.PassengersService])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map