import { Component, OnInit } from '@angular/core';
import { PokemonService} from '../pokemon-service/pokemon-service.service';
import {Pokemon} from '../../shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-favorite',
  templateUrl: './pokemon-favorite.component.html',
  styleUrls: ['./pokemon-favorite.component.scss']
})
export class PokemonFavoriteComponent implements OnInit {
  favPokemon: Pokemon;

  constructor(private _pokemonService: PokemonService) { }

  ngOnInit() {
    this.favPokemon = this._pokemonService.favPokemon;
  }

  pickFavorite(newPokemonName: string) {
    this.favPokemon = new Pokemon(100, newPokemonName);
  }

  updateFavorite() {
    this.favPokemon = this._pokemonService.favPokemon;
  }

}
