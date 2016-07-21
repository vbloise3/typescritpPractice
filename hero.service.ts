import {Hero} from "./hero";
/**
 * Created by vincebloise on 7/20/16.
 */
export class HeroService {
    dude = new Hero("dude");
    mon = new Hero("mon");
    heros: Hero[] = [this.dude, this.mon];
    getHeroes() : Hero[] {
        return this.heros;
    }
}