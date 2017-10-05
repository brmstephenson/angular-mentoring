import { Component } from '@angular/core';
import {Pokemon} from '../shared/models/pokemon.model';
import { PokemonService } from './pokemon-service/pokemon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PokemonService]
})
export class AppComponent {
  constructor(private _pokemonService: PokemonService) { }

  title = 'Pokemon';

  pkType = 'Electric';
}
