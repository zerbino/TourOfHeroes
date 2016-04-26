/**
 * Created by rmartignoni on 26/04/2016.
 */
import {Injectable} from "angular2/core";
import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }
}
