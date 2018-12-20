import { Injectable } from '@angular/core';
import { GeolocationService } from './../services/geolocation.service';
import { IMapPosition } from './../models/IMapPosition';
@Injectable()


export class LocationRepository {
  public userPosition: IMapPosition;

  constructor(public geoLocationService: GeolocationService) {
  }

  public init(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.geoLocationService.getUserLocation().then((position: IMapPosition) => {
        this.userPosition = position;
        resolve(true);
      }).catch((ko) => {
        alert('KO - Cannot get location anyways');
        window.close();
      });
    });
  }

}
