import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { PreOwnedVehiclesListComponent } from './pre-owned-vehicles-list/pre-owned-vehicles-list.component';
import { PreOwnedVehiclesService } from './pre-owned-vehicles.service';

describe('Service: PreOwnedVehicles', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PreOwnedVehiclesListComponent],
      providers: [PreOwnedVehiclesService]
    })
      .compileComponents();
  }));

  it('should ...', inject([PreOwnedVehiclesService], (service: PreOwnedVehiclesService) => {
    expect(service).toBeTruthy();
  }));
});
