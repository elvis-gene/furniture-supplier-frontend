import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnProductComponent } from './return-product.component';

describe('ReturnProductComponent', () => {
  let component: ReturnProductComponent;
  let fixture: ComponentFixture<ReturnProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
