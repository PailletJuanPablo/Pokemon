import { Component } from '@angular/core';
import { GeolocationService } from './services/geolocation.service';
import { PokemonRepository } from './repositories/PokemonRepository';
import { LocationRepository } from './repositories/LocationRepository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  latLng: { lat: number, lng: number };
  constructor(public pokemonRepository: PokemonRepository, public locationRepository: LocationRepository) {
    this.latLng = this.locationRepository.userPosition;
  }

}
