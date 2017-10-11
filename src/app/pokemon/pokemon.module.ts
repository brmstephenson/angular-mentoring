import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonFavoriteComponent } from './pokemon-favorite/pokemon-favorite.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    PokemonDetailComponent,
    PokemonListComponent,
    PokemonFavoriteComponent
  ],
  exports: [
    PokemonDetailComponent,
    PokemonListComponent,
    PokemonFavoriteComponent
  ]
})
export class PokemonModule { }
