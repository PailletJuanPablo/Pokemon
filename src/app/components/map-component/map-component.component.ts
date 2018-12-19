import { Component, OnInit } from '@angular/core';
import { IMapPosition } from './../../models/IMapPosition';
import { PokemonRepository } from 'src/app/repositories/PokemonRepository';
import { LocationRepository } from './../../repositories/LocationRepository';
import { mapStyle } from 'src/app/constants';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent implements OnInit {
  config: {
    mapStyle: any,
    latLng: IMapPosition
  }
    = {
      mapStyle,
      latLng: this.locationRepository.userPosition
    };

  constructor(public pokemonRepository: PokemonRepository, public locationRepository: LocationRepository) {
  }


  ngOnInit() {
    console.log(this.pokemonRepository.list)
  }

}
