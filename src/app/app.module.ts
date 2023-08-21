import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicartComponent } from './pages/episodio1incrementablessignal/micart/micart.component';
import { Episodio1incrementablessignalComponent } from './pages/episodio1incrementablessignal/episodio1incrementablessignal.component';
import { Mycart2Component } from './pages/episodio2incrementablesmultiples/mycart2/mycart2.component';
import { Episodio2incrementablesmultiplesComponent } from './pages/episodio2incrementablesmultiples/episodio2incrementablesmultiples.component';

@NgModule({
  declarations: [
    AppComponent,
      MicartComponent,
      Episodio1incrementablessignalComponent,
      Mycart2Component,
      Episodio2incrementablesmultiplesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
