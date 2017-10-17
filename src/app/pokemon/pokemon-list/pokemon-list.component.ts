import {Component, OnDestroy, OnInit} from '@angular/core';
import {Pokemon} from '../../shared/models/pokemon.model';
import {PokemonService} from '../pokemon-service/pokemon-service.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {
  private _favoritePokemonSubscription: Subscription;

  favoritePokemon: Pokemon;

  pokemons: Pokemon[];

  private getPokemonList(): void {
    this._pokemonService.getPokemonList().subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }

  constructor(private _pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemonList();
    this._favoritePokemonSubscription = this._pokemonService.favPokemon$
      .subscribe(newFav => this.favoritePokemon = newFav);
  }

  chooseFavorite(newFav: Pokemon): void {
    this._pokemonService.changeFavoritePokemon(newFav);
  }

  ngOnDestroy(): void {
    if (this._favoritePokemonSubscription) {
      this._favoritePokemonSubscription.unsubscribe();
    }
  }
}
