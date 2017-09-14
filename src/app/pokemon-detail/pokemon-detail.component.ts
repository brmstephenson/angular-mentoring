import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  private _pokemon: Pokemon;

  @Input()
  set pokemon(p: Pokemon) {
    this._pokemon = p;
    this._pokemon.name = p.name.trim();
  }

  get pokemon() {
    let pk = this._pokemon;
    pk.name = pk.name.toUpperCase();
    return pk;
  }

  constructor() { }

  ngOnInit() {
  }

}
