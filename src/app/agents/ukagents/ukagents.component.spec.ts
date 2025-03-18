import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkagentsComponent } from './ukagents.component';

describe('UkagentsComponent', () => {
  let component: UkagentsComponent;
  let fixture: ComponentFixture<UkagentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UkagentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UkagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
