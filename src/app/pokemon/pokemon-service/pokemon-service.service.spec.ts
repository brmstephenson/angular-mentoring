import { TestBed, inject } from '@angular/core/testing';

import {PokemonService, pokemonUrl} from './pokemon-service.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Pokemon} from '../../shared/models/pokemon.model';

describe('PokemonService', () => {
  const mockPokemonList = [
    new Pokemon(1, 'mock'),
    new Pokemon(2, 'test')
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ PokemonService ],
      imports: [ HttpClientTestingModule ]
    });
  });

  describe('pokemonService', inject(
    [ PokemonService, HttpTestingController ],
    (pokemonService: PokemonService, mockHttp: HttpTestingController) => {
    it('should be created',   () => {
      expect(pokemonService).toBeTruthy();
    });

    it('sets the pokemonList when calling getPokemonList method', () => {
      pokemonService.getPokemonList().subscribe(pokemons => {
        expect(pokemons).toBeDefined();
        expect(pokemons.length).toBe(2);
        expect(pokemons).toEqual(mockPokemonList);
      });

      const request = mockHttp.expectOne(pokemonUrl);

      expect(request.request.method).toEqual('GET');

      request.flush(mockPokemonList);

      mockHttp.verify();
    });
  }));
});
