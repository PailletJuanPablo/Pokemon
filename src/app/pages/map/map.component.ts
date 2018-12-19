import { Component, OnInit } from '@angular/core';
import { PokemonRepository } from 'src/app/repositories/PokemonRepository';
import { LocationRepository } from 'src/app/repositories/LocationRepository';
import { IMapPosition } from './../../models/IMapPosition';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

  ngOnInit() {
  }

}
