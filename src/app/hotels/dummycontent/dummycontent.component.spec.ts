import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummycontentComponent } from './dummycontent.component';

describe('DummycontentComponent', () => {
  let component: DummycontentComponent;
  let fixture: ComponentFixture<DummycontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummycontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummycontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
