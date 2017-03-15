"use strict";
var passengers_1 = require('./passengers');
var PassengersService = (function () {
    function PassengersService() {
    }
    PassengersService.prototype.getPassengers = function () {
        return [new passengers_1.Passengers("Harry", "Winward", 30), new passengers_1.Passengers("John", "Stark", 27)];
    };
    return PassengersService;
}());
exports.PassengersService = PassengersService;
//# sourceMappingURL=passengers.service.js.map