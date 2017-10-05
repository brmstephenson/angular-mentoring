import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PokemonModule} from './pokemon/pokemon.module';
import {TypesModule} from './types/types.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PokemonModule,
    TypesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
