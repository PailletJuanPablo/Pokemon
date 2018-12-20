// Modules
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';

// Services
import { PokemonService } from './services/pokemon.service';
import { GeolocationService } from './services/geolocation.service';
import { EventsService } from './services/events-service.service';

// Repositories
import { PokemonRepository } from './repositories/PokemonRepository';
import { LocationRepository } from './repositories/LocationRepository';

// Components
import { AppComponent } from './app.component';
import { MapPageComponent } from './pages/map/map.page.component';
import { HomePageComponent } from './pages/home/home.page.component';
import { PokemonAddPopupComponent } from './components/pokemon-add-popup/pokemon-add-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    MapPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ComponentsModule,
  ],
  entryComponents: [PokemonAddPopupComponent],
  providers: [
    PokemonService,
    PokemonRepository,
    GeolocationService,
    LocationRepository,
    EventsService,
    {
      provide: APP_INITIALIZER,
      useFactory: geolocationLoad,
      deps: [LocationRepository],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: pokemonsLoad,
      deps: [PokemonRepository],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function geolocationLoad(locationRepository: LocationRepository) {
  return () => locationRepository.init();
}

export function pokemonsLoad(pokemonRepository: PokemonRepository) {
  return () => pokemonRepository.init();
}
