import { Component, OnInit } from '@angular/core';
import { PokemonService} from '../pokemon-service/pokemon-service.service';
import {Pokemon} from '../../shared/models/pokemon.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-pokemon-favorite',
  templateUrl: './pokemon-favorite.component.html',
  styleUrls: ['./pokemon-favorite.component.scss']
})
export class PokemonFavoriteComponent implements OnInit {
  private _favPokemonSubscription: Subscription;
  favPokemon: Pokemon;

  constructor(private _pokemonService: PokemonService) { }

  ngOnInit() {
    this._favPokemonSubscription = this._pokemonService.favPokemon$
      .subscribe(newFav => this.favPokemon = newFav);
  }

  pickFavorite(newPokemonName: string) {
    this._pokemonService.changeFavoritePokemon(new Pokemon(100, newPokemonName));
  }
}
