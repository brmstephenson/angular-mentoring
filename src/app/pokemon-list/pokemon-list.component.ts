import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  // favoritePokemon = 'Charmander';
  pokemons: Pokemon[] = [
    new Pokemon(1, 'Bulbasaur'),
    new Pokemon(2, 'Ivysaur'),
    new Pokemon(3, 'Venusaur'),
    new Pokemon(4, 'Charmander'),
    new Pokemon(5, 'Charmeleon'),
    new Pokemon(6, 'Charizard')
  ];

  // changePokemon(newValue) {
  //   this.favoritePokemon = newValue;
  // }
  //
  // isPikachu(): boolean {
  //   return this.favoritePokemon.toLowerCase() === 'pikachu';
  // }
  //
  // getFavoriteClass(pk: Pokemon): string {
  //   if (pk.name.toLowerCase() === this.favoritePokemon.toLowerCase()) {
  //     return 'yellow-background';
  //   }
  // }

  constructor() { }

  ngOnInit() {
  }
}
