import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { TypesModule } from './types/types.module';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonFavoriteComponent } from './pokemon/pokemon-favorite/pokemon-favorite.component';
import { PokemonService } from './pokemon/pokemon-service/pokemon-service.service';
import { TypeListComponent } from './types/type-list/type-list.component';


describe('AppComponent', () => {
  let pokemonService,
      fixture,
      component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        PokemonModule,
        TypesModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;

    pokemonService = fixture.debugElement.injector.get(PokemonService);

    spyOn(pokemonService, 'getPokemonList').and.returnValue([]);
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    expect(component.title).toEqual('Pokemon');
  }));
});
