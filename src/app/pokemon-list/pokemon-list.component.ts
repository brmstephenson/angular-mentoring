import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../shared/models/pokemon.model';
import {PokemonService} from '../pokemon-service/pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  favoritePokemon: Pokemon;

  pokemons: Pokemon[];

  private getPokemonList() {
    this.pokemons = this._pokemonService.getPokemonList();
  }

  constructor(private _pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemonList();
  }

  chooseFavorite(newFav: Pokemon) {
    this._pokemonService.favPokemon = newFav;
    this.favoritePokemon = this._pokemonService.favPokemon;
  }
}
