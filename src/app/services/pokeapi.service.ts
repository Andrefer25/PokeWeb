import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()

export class PokeapiService {

  pokemons: any[] = [];
  pokemon: any = {};
  random: number;

  PokemonsDB: string = 'http://localhost:3000/pokemons';

  constructor(public http: HttpClient) { }

  getPokemons() {
    return this.http.get(this.PokemonsDB).pipe(map( (resp: any) => {
      this.pokemons = resp;
      return this.pokemons;
    }));
  }

  getPokemon(idx: string) {
    return this.pokemons[idx];
  }

}
