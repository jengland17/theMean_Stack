import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DallasComponent } from './dallas/dallas.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    DallasComponent,
    SeattleComponent,
    SanjoseComponent,
    BurbankComponent,
    DcComponent,
    ChicagoComponent
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],

  providers: [HttpService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
