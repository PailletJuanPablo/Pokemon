import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGeolocationResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private http: HttpClient) {
  }

  getUserLocation() {
    if ('geolocation' in navigator) {
      this.getPositionFromBrowser();
    } else {
      this.getPositionFromIp().then((response) => {
        console.log(response);
      });
    }
  }

  getPositionFromBrowser() {
    // Try to get location from user
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('latitude', position.coords.latitude,
          'longitude', position.coords.longitude);
      },
      (error) => {
        console.log(error);
        // If have a problem, get location from IP
        this.getPositionFromIp().then((response) => {
          console.log(response);
        });
      });
  }

  getPositionFromIp() {
    return new Promise((resolve, reject) => {
      this.http.get('http://www.geoplugin.net/json.gp').toPromise().then((coords: IGeolocationResponse) => {
        resolve({ lat: coords.geoplugin_latitude, lng: coords.geoplugin_longitude });
      });
    });
  }
}
