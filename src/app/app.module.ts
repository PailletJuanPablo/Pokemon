// Modules
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { NguiMapModule } from '@ngui/map';

// Components
import { AppComponent } from './app.component';

// Services
import { PokemonService } from './services/pokemon.service';
import { GeolocationService } from './services/geolocation.service';

// Repositories
import { PokemonRepository } from './repositories/PokemonRepository';
import { LocationRepository } from './repositories/LocationRepository';

// Constants
import { ApiKey } from './constants';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=' + ApiKey })
  ],
  providers: [
    PokemonService,
    PokemonRepository,
    GeolocationService,
    LocationRepository,
    {
      provide: APP_INITIALIZER,
      useFactory: pokemonsLoad,
      deps: [PokemonRepository],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: geolocationLoad,
      deps: [LocationRepository],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function pokemonsLoad(pokemonRepository: PokemonRepository) {
  return () => pokemonRepository.init();
}

export function geolocationLoad(locationRepository: LocationRepository) {
  return () => locationRepository.init();
}
