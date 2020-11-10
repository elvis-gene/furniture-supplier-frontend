import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockControlComponent } from './stock-control.component';

describe('StockcontrolComponent', () => {
  let component: StockControlComponent;
  let fixture: ComponentFixture<StockControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
