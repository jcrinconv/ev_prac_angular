/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PreOwnedVehiclesListComponent } from './pre-owned-vehicles-list.component';

describe('PreOwnedVehiclesListComponent', () => {
  let component: PreOwnedVehiclesListComponent;
  let fixture: ComponentFixture<PreOwnedVehiclesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreOwnedVehiclesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreOwnedVehiclesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
