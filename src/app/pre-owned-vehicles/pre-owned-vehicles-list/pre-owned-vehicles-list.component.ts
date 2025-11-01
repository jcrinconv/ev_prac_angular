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

  getVehiclesPerMarca(): { [marca: string]: number } {
    const vehiclesPerMarca: { [marca: string]: number } = {};
    this.preOwnedVehicles.forEach(vehicle => {
      if (vehiclesPerMarca[vehicle.marca]) {
        vehiclesPerMarca[vehicle.marca]++;
      } else {
        vehiclesPerMarca[vehicle.marca] = 1;
      }
    });
    return vehiclesPerMarca;
  }
}
