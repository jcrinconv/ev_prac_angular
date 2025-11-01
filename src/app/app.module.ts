import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PreOwnedVehiclesModule } from './pre-owned-vehicles/pre-owned-vehicles.module';
import { TempScreenModule } from './temp-screen/temp-screen.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TempScreenModule,
    PreOwnedVehiclesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
