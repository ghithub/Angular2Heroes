import {Component, Input} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
  <div *ngIf="selectedHero">
  <h3>{{selectedHero.name}} details</h3>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name" />
  </div>
  </div>
  `
})

export class HeroDetailComponent{
   hero: Hero;
}