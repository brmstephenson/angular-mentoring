import { Component } from '@angular/core';
import {Pokemon} from '../shared/models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokemon';
  favoritePokemon = 'Charmander';
  pokemon: Pokemon[] = [
    new Pokemon(1, 'Bulbasaur'),
    new Pokemon(2, 'Ivysaur'),
    new Pokemon(3, 'Venusaur'),
    new Pokemon(4, 'Charmander'),
    new Pokemon(5, 'Charmeleon'),
    new Pokemon(6, 'Charizard'),
    { id: 25, name: 'Pikachu', height: 4, weight: 40 }
  ];

  changePokemon(newValue) {
    this.favoritePokemon = newValue;
  }

  isPikachu(): boolean {
    return this.favoritePokemon.toLowerCase() === 'pikachu';
  }

  getFavoriteClass(pk: Pokemon): string {
    if (pk.name.toLowerCase() === this.favoritePokemon.toLowerCase()) {
      return 'yellow-background';
    }
  }
}
