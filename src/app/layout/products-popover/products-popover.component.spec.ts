import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPopoverComponent } from './products-popover.component';

describe('ProductsPopoverComponent', () => {
  let component: ProductsPopoverComponent;
  let fixture: ComponentFixture<ProductsPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPopoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
