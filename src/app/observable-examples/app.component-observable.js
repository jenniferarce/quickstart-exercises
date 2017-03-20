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
var Rx_1 = require('rxjs/Rx');
var forms_1 = require('@angular/forms');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/map');
//import * as $ from 'jquery';
////<reference path="./observable-test/typings/tsd.d.ts"/>
var AppComponent = (function () {
    function AppComponent(fb) {
        //Angular - observable 
        this.form = fb.group({
            search: []
        });
        var search = this.form.get('search');
        search.valueChanges
            .debounceTime(400)
            .map(function (str) { return str.replace(' ', '-'); })
            .subscribe(function (x) { return console.log(x); });
        //Array Observable
        var startDates = [];
        var startDate = new Date();
        for (var day = -2; day <= 2; day++) {
            var date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + day);
            startDates.push(date);
        }
        var observableDate = Rx_1.Observable
            .from(startDates)
            .map(function (date) {
            console.log("Getting deals for date " + date);
            return [1, 2, 3];
        });
        //Implementing a timer
        var observableTimer = Rx_1.Observable.interval(1000);
        observableTimer
            .flatMap(function (x) {
            console.log("Calling de server to get the lastest news");
            return [1, 2, 3];
        });
        //Running parallel operations
        var userStream = Rx_1.Observable.of({
            userId: 1, username: 'mosh'
        })
            .delay(2000);
        var tweetStream = Rx_1.Observable.of([1, 2, 3])
            .delay(1500);
        var observableUserInfo = Rx_1.Observable
            .forkJoin(userStream, tweetStream)
            .map(function (joined) { return new Object({ user: joined[0], tweets: joined[1] }); });
        //Handling errors:
        var observableError = Rx_1.Observable.throw(new Error("Something failed. :O"));
        // observableError.subscribe(
        //     x => console.log(x),
        //   error => console.error(error)
        //);
        //Retrying an error
        var counter = 0;
        var ajaxCall = Rx_1.Observable.of('url')
            .flatMap(function () {
            if (++counter < 2)
                return Rx_1.Observable.throw(new Error("Request failed."));
            return Rx_1.Observable.of([1, 2, 3]);
        });
        //ajaxCall
        //  .retry(3)
        //.subscribe(
        //x => console.log(x),
        //error => console.error(error)
        //);
        //catching and continuing
        var remoteDataStream = Rx_1.Observable.of([5, 6, 7]);
        //Observable.throw(new Error("Something failed."));
        remoteDataStream
            .catch(function (err) {
            var localDataStream = Rx_1.Observable.of([1, 2, 3, 4]);
            return localDataStream;
        });
        //Timeouts
        var observableTimeout = Rx_1.Observable.of([7, 8, 9]).delay(5000);
        //observableTimeout.timeout(1000)
        //               .subscribe(
        //                x=>console.log(x),
        //              error=>console.error(error)
        //         );
        //Complete notified 
        var observableComplete = Rx_1.Observable.from([1, 4, 7]);
        observableComplete.subscribe(function (x) { return console.log(x); }, function (error) { return console.log(error); }, function () { return console.log("Complete."); });
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        //....
        /*var keyups = Observable.fromEvent($("#search"),"keyup")
        .map(e => e.target.value)
        .filter(text=> text.length >= 3)
        .debounceTime(400)
        .distinctUntilChanged()
        .flatMap(searchTerm => {
            var url = "https://api.spotify.com/v1/search?type=artist&q="+searchTerm;
            var promise = $.getJSON(url);
            return Observable.fromPromise(promise);
        })
        ;
      
          keyups.subscribe(data => console.log(data));
      */
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <form [formGroup]=\"form\">\n      <input type=\"text\" formControlName=\"search\">\n    </form>  \n  "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//<input id="search" type="text" class="form-control" placeholder="Search..."> 
//# sourceMappingURL=app.component-observable.js.map