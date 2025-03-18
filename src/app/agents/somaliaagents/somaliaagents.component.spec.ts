import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomaliaagentsComponent } from './somaliaagents.component';

describe('SomaliaagentsComponent', () => {
  let component: SomaliaagentsComponent;
  let fixture: ComponentFixture<SomaliaagentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomaliaagentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomaliaagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
