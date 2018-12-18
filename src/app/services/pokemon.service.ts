import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IReducedPokemon, IResponse } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getList() {
    return new Promise((resolve, reject) => {
      this.http.get('https://pokeapi.co/api/v2/pokemon/').toPromise().then((result: IResponse) => {
        resolve(result.results);
      })
        .catch((error) => {
          reject(error);
        });
    });

  }
}
