import { Component } from '@angular/core';
import {Pokemon} from '../shared/models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokemon';

  favPokemon = new Pokemon(25, 'Pikachu');

  pkType = 'Electric';
}
