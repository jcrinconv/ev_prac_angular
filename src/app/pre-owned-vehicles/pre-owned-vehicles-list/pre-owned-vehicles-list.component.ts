import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../vehicles/vehicle';
import { PreOwnedVehiclesService } from '../pre-owned-vehicles.service';

@Component({
  selector: 'app-pre-owned-vehicles-list',
  templateUrl: './pre-owned-vehicles-list.component.html',
  styleUrls: ['./pre-owned-vehicles-list.component.css']
})
export class PreOwnedVehiclesListComponent implements OnInit {

  preOwnedVehicles: Array<Vehicle> = [];

  constructor(private preOwnedVehiclesService: PreOwnedVehiclesService) { }

  ngOnInit() {
    this.preOwnedVehiclesService.getPreOwnedVehicles().subscribe(vehicles => {
      this.preOwnedVehicles = vehicles;
    });
  }

}
