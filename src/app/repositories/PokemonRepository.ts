import { IPokemon } from 'src/app/models';
import { PokemonService } from '../services/pokemon.service';
import { Injectable } from '@angular/core';

@Injectable()

export class PokemonRepository {
  public list: Array<IPokemon>;

  constructor(public pokemonService: PokemonService) {
  }

  public init(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.pokemonService
        .getList()
        .then((response: Array<IPokemon>) => {
          this.list = response;
          resolve();
        })
        .catch(error => {
          console.error(error);
          reject();
        });
    });
  }

  public searchByName(nameToSearch: string): Array<IPokemon> {
    return this.list.filter((pokemon) => {
      return pokemon.name.toLowerCase().match(nameToSearch);
    });
  }

}
