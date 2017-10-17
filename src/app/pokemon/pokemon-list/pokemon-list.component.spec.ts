import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListComponent } from './pokemon-list.component';
import {PokemonService} from '../pokemon-service/pokemon-service.service';
import {Pokemon} from '../../shared/models/pokemon.model';
import {HttpClientModule} from '@angular/common/http';
import {PokemonDetailComponent} from '../pokemon-detail/pokemon-detail.component';
import 'rxjs/add/Observable/of';
import {Observable} from 'rxjs/Observable';
// import {Observable} from 'rxjs/Observable';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let pokemonService: PokemonService;
  const mockPokemonList = [
    new Pokemon(1, 'mock')
  ];

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

    pokemonService = fixture.debugElement.injector.get(PokemonService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('sets the pokemon list', () => {
      spyOn(pokemonService, 'getPokemonList').and.returnValue(
        Observable.of(mockPokemonList)
      );
      component.ngOnInit();

      expect(component.pokemons).toEqual(mockPokemonList);
    });
  });
});
