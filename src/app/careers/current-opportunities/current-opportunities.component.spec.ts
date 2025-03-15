import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOpportunitiesComponent } from './current-opportunities.component';

describe('CurrentOpportunitiesComponent', () => {
  let component: CurrentOpportunitiesComponent;
  let fixture: ComponentFixture<CurrentOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentOpportunitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
