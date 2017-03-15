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
var passengers_service_1 = require('./zippy/passengers.service');
//import{ContactFormComponent} from './contact-form/contact-form.component';//13/03
//import{SubscribeComponent} from './subscribe-form/subscribe-form.component'; //13/03
//import { TweetsComponent } from './tweets/tweets.component';//10/03
//import { TweetService } from './tweets/tweets.service';
//import { Tweet } from './tweets/tweet';
//import {SummaryPipe} from './summary-pipe/summary.pipe';
//import{BootstrapPanel} from './ng-content-example/bootstrap.panel.component';
var AppComponent = (function () {
    function AppComponent(passengerService) {
        this.passengers = passengerService.getPassengers();
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n     \n     <password-form></password-form> \n \n  ",
            providers: [passengers_service_1.PassengersService]
        }), 
        __metadata('design:paramtypes', [passengers_service_1.PassengersService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//Tweet excercise : 
//template: `
//  <div *ngFor="let data of tweets">
//<tweetList [data]="data"></tweetList>
//</div>
//`,
//providers: [TweetService]
//export class AppComponent {
//tweets: Tweet[];
//constructor(tweetServices: TweetService) {
//    this.tweets = tweetServices.getTweets();
//}
//}
//  <div *ngFor = "let passenger of passengers">
//<zippy [passenger]="passenger"> </zippy>
//</div>
//<contact-form></contact-form>
//  <subscribe-form></subscribe-form>
// <signup-form></signup-form> 
//# sourceMappingURL=app.component.js.map