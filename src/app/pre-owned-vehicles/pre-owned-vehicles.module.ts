import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreOwnedVehiclesListComponent } from './pre-owned-vehicles-list/pre-owned-vehicles-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PreOwnedVehiclesListComponent],
  declarations: [PreOwnedVehiclesListComponent]
})
export class PreOwnedVehiclesModule { }
