import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdCardModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdTooltipModule} from '@angular/material';

import 'hammerjs';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { CardetailComponent } from './cardetail/cardetail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewuserComponent,
    UserdetailComponent,
    CardetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
