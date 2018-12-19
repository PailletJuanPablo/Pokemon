// Modules
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { NguiMapModule } from '@ngui/map';

// Services
import { PokemonService } from './services/pokemon.service';
import { GeolocationService } from './services/geolocation.service';

// Repositories
import { PokemonRepository } from './repositories/PokemonRepository';
import { LocationRepository } from './repositories/LocationRepository';

// Constants
import { ApiKey } from './constants';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { AppRoutingModule } from './app-routing.module';
import { MapComponentComponent } from './components/map-component/map-component.component';
import { PokemonsAddComponent } from './components/pokemons-add/pokemons-add.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    MapComponentComponent,
    PokemonsAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=' + ApiKey }),
    AppRoutingModule
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
