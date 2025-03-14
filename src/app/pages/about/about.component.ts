import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../about/hero/hero.component';
import { StoryComponent } from '../../about/story/story.component';
import { MissionAndVisionComponent } from '../../about/mission-and-vision/mission-and-vision.component';
import { CtaComponent } from '../../about/cta/cta.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    StoryComponent,
    MissionAndVisionComponent,
    CtaComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-mission-and-vision></app-mission-and-vision>
    <app-story></app-story>
    <app-cta></app-cta>
  `,
})
export class AboutComponent {}
