import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelPaymentComponent } from './hotel-payment.component';

describe('HotelPaymentComponent', () => {
  let component: HotelPaymentComponent;
  let fixture: ComponentFixture<HotelPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
