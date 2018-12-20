import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  pluginUrl = 'https://ipapi.co/json/';
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
      this.http.get(this.pluginUrl).toPromise().then((coords: any) => {
        alert('We could not get your location, we will use an approximate');
        resolve({ lat: Number(coords.latitude), lng: Number(coords.longitude) });
      })
        .catch((error) => reject(error));
    });
  }

  generateRandomPositionInRadius(lat, lng, radius) {
    const xAsysUser = lng;
    const yAsysUser = lat;
    // Convert Radius from meters to degrees.
    const radiusInDegrees = radius / 111300;
    // Generate Random w
    const w = radiusInDegrees * Math.sqrt(Math.random());
    // Generate a Random Angle
    const randomAngle = 2 * Math.PI * Math.random();
    // Generate x and y axis based on cos of random angle
    const xAsis = w * Math.cos(randomAngle);
    const yAsis = w * Math.sin(randomAngle);
    const xp = xAsis / Math.cos(yAsysUser);
    return [yAsis + yAsysUser, xp + xAsysUser];
  }
}
