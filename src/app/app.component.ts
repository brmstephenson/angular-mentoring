import { Component } from '@angular/core';
import {Pokemon} from '../shared/models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The Favorite Pokemon';
  favoritePokemon: Pokemon[] = [];
  overallFavorite: Pokemon;

  pokemon: Pokemon[] = [
    new Pokemon(1, 'Bulbasaur', 'Grass'),
    new Pokemon(2, 'Ivysaur', 'Grass'),
    new Pokemon(3, 'Venusaur', 'Grass'),
    new Pokemon(4, 'Charmander', 'Fire'),
    new Pokemon(5, 'Charmeleon', 'Fire'),
    new Pokemon(6, 'Charizard', 'Fire'),
    new Pokemon(7, 'Squirtle', 'Water'),
    new Pokemon(8, 'Wartortle', 'Water'),
    new Pokemon(9, 'Blastoise', 'Water')
  ];

  addToFavorites (pk: Pokemon) {
    if (!this.isFavorite(pk)) {
      this.favoritePokemon.push(pk);
    }
  }

  removeFromFavorites (pk: Pokemon) {
    if (this.isFavorite(pk)) {
      this.favoritePokemon = this.favoritePokemon.filter(p => p !== pk);
    }
  }

  toggleFavorite(pk: Pokemon) {
    if (this.isFavorite(pk)) {
      this.removeFromFavorites(pk);
    } else {
      this.addToFavorites(pk);
    }
  }

  isFavorite = (pk: Pokemon) => this.favoritePokemon.includes(pk);

  choseOverallFavorite(pkName: String) {
    const pokemon = this.pokemon.find(p => p.name.toLowerCase() === pkName.toLowerCase());

    if (pokemon) {
      this.overallFavorite = pokemon;
    } else {
      this.overallFavorite = new Pokemon(null, pkName.toString(), null);
    }
  }
}
