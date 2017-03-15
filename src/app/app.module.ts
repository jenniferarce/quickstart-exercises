import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import{ZippyComponent} from './zippy/zippy.component';
import{SubscribeComponent} from './subscribe-form/subscribe-form.component';

import{SignUpFormComponent} from './signup-form/signup-form.component';

import{PasswordComponent} from './password-form/password-form.component';

//import { TweetsComponent } from './tweets/tweets.component';
//import {SummaryPipe} from './summary-pipe/summary.pipe';
//import{BootstrapPanel} from './ng-content-example/bootstrap.panel.component';

//import{ContactFormComponent} from './contact-form/contact-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent,SignUpFormComponent, PasswordComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

// TweetsComponent, SummaryPipe,BootstrapPanel,ContactFormComponent,
//ZippyComponent,SubscribeComponent,
