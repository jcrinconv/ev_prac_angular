/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PreOwnedVehiclesService } from './pre-owned-vehicles.service';

describe('Service: PreOwnedVehicles', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreOwnedVehiclesService]
    });
  });

  it('should ...', inject([PreOwnedVehiclesService], (service: PreOwnedVehiclesService) => {
    expect(service).toBeTruthy();
  }));
});
