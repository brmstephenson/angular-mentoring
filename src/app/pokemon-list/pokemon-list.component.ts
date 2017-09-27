import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../shared/models/pokemon.model';
import {PokemonService} from '../pokemon-service/pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  providers: [PokemonService]
})
export class PokemonListComponent implements OnInit {
  favoritePokemon: Pokemon;

  pokemons: Pokemon[];

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

  private getPokemonList() {
    this.pokemons = this.pokemonService.getPokemonList();
  }

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemonList();
  }

  chooseFavorite(newFav: Pokemon) {
    this.favoritePokemon = newFav;
  }
}
