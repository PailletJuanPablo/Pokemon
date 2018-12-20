import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from 'src/app/models';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiBaseUrl: string;
  pokemonsBase = 'pokemon';
  constructor(private http: HttpClient) {
    this.apiBaseUrl = environment.apiUrl;

  }

  getList() {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiBaseUrl.concat(this.pokemonsBase)).toPromise().then((results: IResponse) => {
        resolve(results.data);
      })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
