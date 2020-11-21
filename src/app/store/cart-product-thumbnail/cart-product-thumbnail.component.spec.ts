import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductThumbnailComponent } from './cart-product-thumbnail.component';

describe('CartProductThumbnailComponent', () => {
  let component: CartProductThumbnailComponent;
  let fixture: ComponentFixture<CartProductThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartProductThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartProductThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
