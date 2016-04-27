/**
 * Created by rmartignoni on 26/04/2016.
 */
import {Component, Input} from 'angular2/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {RouteParams} from "angular2/router";
import {OnInit} from "angular2/core";

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
  hero: Hero;
  constructor(private _heroService: HeroService, private _routeParams: RouteParams) {}
  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._heroService.getHero(id).then((hero) => this.hero = hero);
  }
  goBack() {
    window.history.back();
  }
}
