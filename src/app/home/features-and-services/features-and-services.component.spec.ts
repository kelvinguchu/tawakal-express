import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesAndServicesComponent } from './features-and-services.component';

describe('FeaturesAndServicesComponent', () => {
  let component: FeaturesAndServicesComponent;
  let fixture: ComponentFixture<FeaturesAndServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesAndServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
