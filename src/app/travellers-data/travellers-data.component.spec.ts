import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellersDataComponent } from './travellers-data.component';

describe('TravellersDataComponent', () => {
  let component: TravellersDataComponent;
  let fixture: ComponentFixture<TravellersDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellersDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
