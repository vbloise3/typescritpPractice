/**
 * Created by vincebloise on 7/20/16.
 */
import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
export class HeroListComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    constructor(private service: HeroService) { }
    ngOnInit() {
        this.heroes = this.service.getHeroes();
    }
    selectHero(hero: Hero) { this.selectedHero = hero; }
}