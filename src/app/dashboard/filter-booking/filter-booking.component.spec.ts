import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBookingComponent } from './filter-booking.component';

describe('FilterBookingComponent', () => {
  let component: FilterBookingComponent;
  let fixture: ComponentFixture<FilterBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
