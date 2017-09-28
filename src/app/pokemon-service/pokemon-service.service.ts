import { Injectable } from '@angular/core';
import {Pokemon} from '../../shared/models/pokemon.model';

@Injectable()
export class PokemonService {
  private _pokemonList: Pokemon[];
  private _favPokemon: Pokemon;

  get favPokemon() {
    return this._favPokemon;
  }

  set favPokemon(newPokemon: Pokemon) {
    this._favPokemon = newPokemon;
  }

  getPokemonList(): Pokemon[] {
    if (!this._pokemonList) {
      this._pokemonList = [
        new Pokemon(1, 'Bulbasaur'),
        new Pokemon(2, 'Ivysaur'),
        new Pokemon(3, 'Venusaur'),
        new Pokemon(4, 'Charmander'),
        new Pokemon(5, 'Charmeleon'),
        new Pokemon(6, 'Charizard')
      ];
    }
    return this._pokemonList;
  }
}
