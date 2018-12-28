import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemons: any[] = [];

  constructor(public _pokedex: PokeapiService, private router: Router) { }

  ngOnInit() {
    this._pokedex.getPokemons().subscribe(data => {
      console.log(data);
      this.pokemons = data;
    });
  }

}
