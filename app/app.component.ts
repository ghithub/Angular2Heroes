import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  template: `
  <h3>{{title}}</h3>
  <h3>heroes</h3>
  <ul class="heroes">
     <li *ngFor="let hero of heroes" [class.selected]="hero===selectedHero" (click)="onSelect(hero)">
       <span class="badge">{{hero.id}}</span> {{hero.name}}
     </li>
  </ul>  
  <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
  providers: [HeroService]
  })

export class AppComponent implements OnInit { 
    constructor(private heroService: HeroService){};
    title = 'Tour of Heroes'; 
    selectedHero: Hero;
    heroes: Hero[];
    onSelect(hero: Hero): void {
       this.selectedHero = hero;
    };
    
    getHeroes(): void {
       this.heroService.getHeroes().then(h => this.heroes = h);
    };
    
    ngOnInit(): void {
      this.getHeroes();
    }
}
