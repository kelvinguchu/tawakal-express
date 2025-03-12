import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAndPartnersComponent } from './products-and-partners.component';

describe('ProductsAndPartnersComponent', () => {
  let component: ProductsAndPartnersComponent;
  let fixture: ComponentFixture<ProductsAndPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsAndPartnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsAndPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
