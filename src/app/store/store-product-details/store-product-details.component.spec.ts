import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProductDetailsComponent } from './store-product-details.component';

describe('StoreProductDetailsComponent', () => {
  let component: StoreProductDetailsComponent;
  let fixture: ComponentFixture<StoreProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
