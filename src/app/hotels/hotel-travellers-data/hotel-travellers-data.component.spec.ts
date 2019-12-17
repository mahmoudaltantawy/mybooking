import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelTravellersDataComponent } from './hotel-travellers-data.component';

describe('HotelTravellersDataComponent', () => {
  let component: HotelTravellersDataComponent;
  let fixture: ComponentFixture<HotelTravellersDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelTravellersDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelTravellersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
