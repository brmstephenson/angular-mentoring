import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListComponent } from './pokemon-list.component';
import {PokemonService} from '../pokemon-service/pokemon-service.service';
import {Pokemon} from '../../shared/models/pokemon.model';
import {HttpClientModule} from '@angular/common/http';
import {PokemonDetailComponent} from '../pokemon-detail/pokemon-detail.component';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListComponent, PokemonDetailComponent ],
      imports: [ HttpClientModule ],
      providers: [ PokemonService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    component.pokemons = [
      new Pokemon(1, 'Test'),
    ];
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
