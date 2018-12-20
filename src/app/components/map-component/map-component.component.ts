import { Component, OnInit } from '@angular/core';
import { IMapPosition } from './../../models/IMapPosition';
import { PokemonRepository } from 'src/app/repositories/PokemonRepository';
import { LocationRepository } from './../../repositories/LocationRepository';
import { Subscription } from 'rxjs';
import { EventsService } from 'src/app/services/events-service.service';
import { mapStyle } from 'src/app/constants/mapConstants';
import { IPokemonEvent } from './../../models/IPokemonsEvent';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponent {
  config: {
    mapStyle: any,
    latLng: IMapPosition
  }
    = {
      mapStyle,
      latLng: this.locationRepository.userPosition
    };

  message: any;
  subscription: Subscription;

  randmonPokemons = [];


  constructor(public pokemonRepository: PokemonRepository,
    public locationRepository: LocationRepository,
    private eventsService: EventsService,
    private geolocationService: GeolocationService) {
    this.subscription = this.eventsService.listenEvents().subscribe((action: IPokemonEvent) => {
      if (action.type === 'clear') {
        this.randmonPokemons = [];
      } else {
        this.setRandomPokemon(action.pokemon);
      }
    });
  }



  setRandomPokemon(pokemon) {
    const userPosition = this.locationRepository.userPosition;
    const randomLatLng = this.geolocationService.generateRandomPositionInRadius(userPosition.lat, userPosition.lng, 200);
    const image = pokemon.img;
    this.randmonPokemons.push({ latLng: randomLatLng, image });

    // Check Radius

    /*
        for (let i = 0, len = 100; i < len; i++) {
          const randmonLatLng = this.geolocationService.generateRandomPositionInRadius(userPosition.lat, userPosition.lng, 200);
          const image = pokemon.img;
          this.randmonPokemons.push({ latLng: randmonLatLng, image });
        }
        */
  }

}
