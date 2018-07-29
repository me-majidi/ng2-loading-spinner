import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2LoadingSpinnerComponent } from './ng2-loading-spinner.component';

describe('Ng2LoadingSpinnerComponent', () => {
  let component: Ng2LoadingSpinnerComponent;
  let fixture: ComponentFixture<Ng2LoadingSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2LoadingSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2LoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
