import {Component} from 'angular2/core';
import {Hero} from "./hero";
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from "./hero.service";
import {OnInit} from "angular2/core";
import {Router} from "angular2/router";

@Component({
  selector: 'my-heroes',
  templateUrl:'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  directives: [HeroDetailComponent],
})
export class HeroesComponent implements OnInit{
  constructor(private _heroService: HeroService, private _router: Router){
  };
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes() {
    this._heroService.getHeroes().then((heroes)=>{
      this.heroes = heroes;
    });
  }
  title = 'Tour of Heroes';
  selectedHero:Hero;
  heroes;
  onSelect(hero:Hero) {
    this.selectedHero = hero;
  }
  gotoDetail() {
    this._router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
  }
}
