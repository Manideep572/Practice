import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heros';
import {HeroService} from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  //heroes=HEROES;
  selectedHero?: Hero;

  heroes:Hero[] =[];

  constructor(private heroService:HeroService, private messageService:MessageService) { }

  ngOnInit() {
    this.getHeros();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeros():void{
   this.heroService.getHeros().subscribe(heroes=>this.heroes=heroes);
  }
  

}
