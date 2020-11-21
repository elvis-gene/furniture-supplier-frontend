import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSaleComponent } from './update-sale.component';

describe('UpdateSaleComponent', () => {
  let component: UpdateSaleComponent;
  let fixture: ComponentFixture<UpdateSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
