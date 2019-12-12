import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFormSerachComponent } from './hotel-form-serach.component';

describe('HotelFormSerachComponent', () => {
  let component: HotelFormSerachComponent;
  let fixture: ComponentFixture<HotelFormSerachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelFormSerachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelFormSerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
