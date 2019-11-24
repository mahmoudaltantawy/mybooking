import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrivebookComponent } from './retrivebook.component';

describe('RetrivebookComponent', () => {
  let component: RetrivebookComponent;
  let fixture: ComponentFixture<RetrivebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrivebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrivebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
