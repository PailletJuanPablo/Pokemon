import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGeoPluginresponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private http: HttpClient) {
  }

  getUserLocation() {
    return new Promise((resolve, reject) => {
      // Get position from browser if support
      if ('geolocation' in navigator) {
        // Try to get position from browser
        navigator.geolocation.getCurrentPosition((position) => {
          resolve({ lat: position.coords.latitude, lng: position.coords.longitude });
        },
          // If got error, get from ip
          (err) => {
            this.getPositionFromIp().then((coords) => resolve(coords));
          }
        );
      } else {
        // If navigator not support geolocation, get from IP directly
        this.getPositionFromIp().then((coords) => resolve(coords));
        resolve(true);
      }
    });
  }

  getPositionFromIp() {
    return new Promise((resolve, reject) => {
      this.http.get('http://www.geoplugin.net/json.gp').toPromise().then((coords: IGeoPluginresponse) => {
        resolve({ lat: Number(coords.geoplugin_latitude), lng: Number(coords.geoplugin_longitude) });
      })
        .catch((error) => reject(error));
    });
  }
}
