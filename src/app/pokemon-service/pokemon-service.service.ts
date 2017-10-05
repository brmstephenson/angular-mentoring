import { Injectable } from '@angular/core';
import {Pokemon} from '../../shared/models/pokemon.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { apiUrl } from '../../shared/constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {PokemonResponse} from './pokemon-response';
import {HttpClient} from '@angular/common/http';

export const pokemonUrl = `${apiUrl}/pokemon/`;

@Injectable()
export class PokemonService {
  private _pokemonList: Pokemon[];
  private _favPokemonSource = new BehaviorSubject<Pokemon>(null);
  favPokemon$ = this._favPokemonSource.asObservable();

  constructor (private _http: HttpClient) { }

  changeFavoritePokemon(newValue: Pokemon) {
    this._favPokemonSource.next(newValue);
  }

  getPokemonList(): Observable<Pokemon[]> {
    return this._http.get<PokemonResponse>(pokemonUrl)
      .map(res => this._pokemonList = res.results);
  }
}
