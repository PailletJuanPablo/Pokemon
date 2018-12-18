// Modules
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

// Components
import { AppComponent } from './app.component';

// Services
import { PokemonService } from './services/pokemon.service';
import { GeolocationService } from './services/geolocation.service';

// Repositories
import { PokemonRepository } from './repositories/PokemonRepository';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PokemonService,
    PokemonRepository,
    GeolocationService,
    {
      provide: APP_INITIALIZER,
      useFactory: pokemonsLoad,
      deps: [PokemonRepository],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: geolocationLoad,
      deps: [GeolocationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function pokemonsLoad(pokemonRepository: PokemonRepository) {
  return () => pokemonRepository.init();
}

export function geolocationLoad(geolocationService: GeolocationService) {
  return () => geolocationService.getUserLocation();
}
