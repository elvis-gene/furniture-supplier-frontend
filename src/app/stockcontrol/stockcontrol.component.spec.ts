import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockcontrolComponent } from './stockcontrol.component';

describe('StockcontrolComponent', () => {
  let component: StockcontrolComponent;
  let fixture: ComponentFixture<StockcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
