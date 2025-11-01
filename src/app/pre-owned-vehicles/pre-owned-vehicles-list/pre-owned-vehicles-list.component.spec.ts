/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { faker } from '@faker-js/faker';
import { Vehicle } from '../../vehicles/vehicle';
import { PreOwnedVehiclesListComponent } from './pre-owned-vehicles-list.component';

describe('PreOwnedVehiclesListComponent', () => {
  let component: PreOwnedVehiclesListComponent;
  let fixture: ComponentFixture<PreOwnedVehiclesListComponent>;
  let debug: DebugElement;

  let fakeVehicles: Vehicle[] = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PreOwnedVehiclesListComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreOwnedVehiclesListComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;

    fakeVehicles = Array.from({ length: 5 }).map((_, index) => ({
      id: index + 1,
      marca: faker.vehicle.manufacturer(),
      linea: faker.vehicle.model(),
      referencia: faker.word.words(2),
      modelo: faker.number.int({ min: 2000, max: 2023 }),
      kilometraje: faker.number.int({ min: 10000, max: 200000 }),
      color: faker.color.human(),
      imagen: faker.internet.url(),
    }));
    component.preOwnedVehicles = fakeVehicles;
    fixture.detectChanges();
  });

  // Test 1
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test 2
  it('should have same number of vehicle rows that are created', () => {
    const vehicleRows = debug.queryAll(By.css('tbody tr'));
    expect(vehicleRows.length).toBe(component.preOwnedVehicles.length);
  });

  // Test 3
  it('should display the first vehicle marca', () => {
    const firstVehicleMarca = debug.query(By.css('tbody tr:first-child td:nth-child(2)')).nativeElement;
    expect(firstVehicleMarca.textContent.trim()).toBe(component.preOwnedVehicles[0].marca);
  });

  // Test 4
  it('should display the correct vehicle linea for the second vehicle', () => {
    const vehicleLineaElements = debug.queryAll(By.css('tbody tr td:nth-child(3)'));
    const secondVehicleLineaText = vehicleLineaElements[1].nativeElement.textContent.trim();
    expect(secondVehicleLineaText).toBe(component.preOwnedVehicles[1].linea);
  });

  // Test 5
  it('should display the correct vehicle modelo for each vehicle', () => {
    const vehicleModeloElements = debug.queryAll(By.css('tbody tr td:nth-child(4)'));
    vehicleModeloElements.forEach((elemento: any, index: number) => {
      const modeloText = elemento.nativeElement.textContent.trim();
      expect(modeloText).toBe(component.preOwnedVehicles[index].modelo.toString());
    });
  });

  // Test 6
  it('should display vehicle brand totals correctly', () => {
    const vehiclesPerMarca = component.getVehiclesPerMarca();

    // Verificar que se muestran totales por marca
    expect(Object.keys(vehiclesPerMarca).length).toBeGreaterThan(0);

    // Verificar que el método getVehiclesPerMarca funciona correctamente
    let totalVehicles = 0;
    for (const marca in vehiclesPerMarca) {
      totalVehicles += vehiclesPerMarca[marca];
    }
    expect(totalVehicles).toBe(component.preOwnedVehicles.length);
  });

  // Test 7
  it('should display all vehicle IDs correctly', () => {
    const vehicleIdElements = debug.queryAll(By.css('tbody tr td:first-child'));
    vehicleIdElements.forEach((elemento: any, index: number) => {
      const idText = elemento.nativeElement.textContent.trim();
      expect(idText).toBe(component.preOwnedVehicles[index].id.toString());
    });
  });

  // Test 8
  it('should display table headers in correct order', () => {
    const headerElements = debug.queryAll(By.css('thead th'));
    const expectedHeaders = ['#', 'Marca', 'Línea', 'Modelo'];

    expect(headerElements.length).toBe(expectedHeaders.length);

    headerElements.forEach((headerElement: any, index: number) => {
      const headerText = headerElement.nativeElement.textContent.trim();
      expect(headerText).toBe(expectedHeaders[index]);
    });
  });
});
