import { Injectable } from '@angular/core';
import {Pokemon} from '../../shared/models/pokemon.model';

@Injectable()
export class PokemonService {
  getPokemonList(): Pokemon[] {
    return [
      new Pokemon(1, 'Bulbasaur'),
        new Pokemon(2, 'Ivysaur'),
        new Pokemon(3, 'Venusaur'),
        new Pokemon(4, 'Charmander'),
        new Pokemon(5, 'Charmeleon'),
        new Pokemon(6, 'Charizard')
      ];
  }
}
