import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFavoriteComponent } from './pokemon-favorite.component';

describe('PokemonFavoriteComponent', () => {
  let component: PokemonFavoriteComponent;
  let fixture: ComponentFixture<PokemonFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
