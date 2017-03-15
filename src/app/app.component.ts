import { Component } from '@angular/core';

import {SignUpFormComponent} from './signup-form/signup-form.component';

import{ZippyComponent} from './zippy/zippy.component';
import{Passengers} from './zippy/passengers';
import{PassengersService} from './zippy/passengers.service';

import{PasswordComponent} from './password-form/password-form.component';

//import{ContactFormComponent} from './contact-form/contact-form.component';//13/03

//import{SubscribeComponent} from './subscribe-form/subscribe-form.component'; //13/03

//import { TweetsComponent } from './tweets/tweets.component';//10/03
//import { TweetService } from './tweets/tweets.service';
//import { Tweet } from './tweets/tweet';
//import {SummaryPipe} from './summary-pipe/summary.pipe';
//import{BootstrapPanel} from './ng-content-example/bootstrap.panel.component';

@Component({
  selector: 'my-app',
  template: `
     
     <password-form></password-form> 
 
  `,
  providers: [PassengersService]
})

export class AppComponent {
  passengers:Passengers[];

  constructor(passengerService:PassengersService){
    this.passengers = passengerService.getPassengers();
  }
}

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
  