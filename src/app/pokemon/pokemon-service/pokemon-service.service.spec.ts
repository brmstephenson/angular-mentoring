import { TestBed, inject } from '@angular/core/testing';

import { PokemonService } from './pokemon-service.service';
import {HttpClientModule} from '@angular/common/http';

describe('PokemonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonService],
      imports: [ HttpClientModule ]
    });
  });

  it('should be created', inject([PokemonService], (service: PokemonService) => {
    expect(service).toBeTruthy();
  }));
});
