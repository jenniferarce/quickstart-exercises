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
var VoteComponent = (function () {
    function VoteComponent() {
        this.voteCount = 0;
        this.myVote = 0;
        this.vote = new core_1.EventEmitter();
    }
    VoteComponent.prototype.onClickUp = function () {
        if (this.myVote == 1)
            return; //asegura que solo se pueda votar 1 vez
        this.myVote++;
        this.vote.emit({ myVote: this.myVote });
    };
    VoteComponent.prototype.onClickDown = function () {
        if (this.myVote == -1)
            return; //asegura que solo se pueda votar 1 vez
        this.myVote--;
        this.vote.emit({ myVote: this.myVote });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], VoteComponent.prototype, "voteCount", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], VoteComponent.prototype, "myVote", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], VoteComponent.prototype, "vote", void 0);
    VoteComponent = __decorate([
        core_1.Component({
            selector: 'vote',
            template: " \n    <i class=\"glyphicon glyphicon-menu-up vote-pointer default-style\"\n    [class.ColorChange] = \"myVote==1\"\n    (click)=\"onClickUp()\"></i>\n    <p>\n    <span class=\"default-style\">{{voteCount + myVote}}</span>\n   <p>\n    <i class=\"glyphicon glyphicon-menu-down vote-pointer default-style\"\n    [class.ColorChange] = \"myVote== -1\"\n    (click)=\"onClickDown()\"></i>\n    <p>\n    ",
            styles: ["\n        .default-style{\n            color: #a5a8ab;\n            width: 20px;\n        }\n        .ColorChange{\n            color: orange;\n        }\n        .vote-pointer{\n            cursor: pointer;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], VoteComponent);
    return VoteComponent;
}());
exports.VoteComponent = VoteComponent;
//# sourceMappingURL=vote.component.js.map