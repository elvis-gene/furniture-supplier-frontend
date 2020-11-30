import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleProductThumbnailComponent } from './sale-product-thumbnail.component';

describe('SaleProductThumbnailComponent', () => {
  let component: SaleProductThumbnailComponent;
  let fixture: ComponentFixture<SaleProductThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleProductThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleProductThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
