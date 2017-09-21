import { Component } from '@angular/core';
import {Pokemon} from '../shared/models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokemon';

  pokemonsList1 = [
    new Pokemon(1, 'Bulbasaur'),
    new Pokemon(2, 'Ivysaur'),
    new Pokemon(3, 'Venusaur'),
    new Pokemon(4, 'Charmander'),
    new Pokemon(5, 'Charmeleon'),
    new Pokemon(6, 'Charizard')
  ];

  pokemonName = 'Weedle';
  favPokemon = new Pokemon(25, 'Pikachu');

  updatePokemon(newVal) {
    this.pokemonName = newVal;
  }

  updateFav(newVal) {
    this.favPokemon.name = newVal;
  }
}
