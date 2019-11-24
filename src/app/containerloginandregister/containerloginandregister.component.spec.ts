import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerloginandregisterComponent } from './containerloginandregister.component';

describe('ContainerloginandregisterComponent', () => {
  let component: ContainerloginandregisterComponent;
  let fixture: ComponentFixture<ContainerloginandregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerloginandregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerloginandregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
