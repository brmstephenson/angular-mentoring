import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Pokemon} from '../../shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  private _pokemon: Pokemon;

  @Input() poketype = 'Electric';

  @Input()
  set pokemon(p: Pokemon) {
    this._pokemon = p;
    this._pokemon.name = p.name.trim();
  }

  get pokemon() {
    return this._pokemon;
  }

  @Output() onSelected = new EventEmitter<Pokemon>();

  selectsPokemon(p: Pokemon) {
    this.onSelected.emit(p);
  }

  constructor() { }

  ngOnInit() {
  }

}
