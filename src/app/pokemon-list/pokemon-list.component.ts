import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @Input() pokemons: Pokemon[];
  @Input() pokemonName: string;
  @Input() favPokemon: Pokemon;

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

  updateP(newValue: string) {
    this.pokemonName = newValue;
  }

  updateFav(value: string) {
    this.favPokemon.name = value;
  }
}
