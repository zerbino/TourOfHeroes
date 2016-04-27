/**
 * Created by rmartignoni on 26/04/2016.
 */
import {Injectable} from "angular2/core";
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero";

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHero(id:Number):Promise<Hero> {
    return this.getHeroes().then((heroes)=> {
      return heroes.filter((hero)=>hero.id === id)[0];
    })
  }
}
