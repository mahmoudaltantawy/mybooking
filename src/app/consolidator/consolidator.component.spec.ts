import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidatorComponent } from './consolidator.component';

describe('ConsolidatorComponent', () => {
  let component: ConsolidatorComponent;
  let fixture: ComponentFixture<ConsolidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
