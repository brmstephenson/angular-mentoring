import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailComponent } from './pokemon-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {PokemonService} from '../pokemon-service/pokemon-service.service';
import {Pokemon} from '../../shared/models/pokemon.model';
import {By} from '@angular/platform-browser';
import {element} from 'protractor';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;
  const mockPokemon = new Pokemon(1, 'mock');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ PokemonDetailComponent ],
      providers: [ PokemonService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    component.pokemon = mockPokemon;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('pokemon setter trims the pokemon name', () => {
    const newMockPokemon = new Pokemon(1, '              mock                ');
    const trimmedName = 'mock';
    component.pokemon = newMockPokemon;

    expect(component.pokemon.name).toBe(trimmedName);
  });

  it('sets the pokemon by input', () => {
    const element = fixture.debugElement.query(By.css('div'));

    expect(element.nativeElement.textContent).toContain(mockPokemon.name);
  });

  it('the pokemon gets selected', () => {
    const buttonElement = fixture.debugElement.query((By.css('button')));
    let selectedPokemon: Pokemon;

    component.onSelected.subscribe((pokemon: Pokemon) => selectedPokemon = pokemon);

    buttonElement.triggerEventHandler('click', null);

    expect(selectedPokemon).toEqual(mockPokemon);
  });
});
