import { IReducedPokemon, IPokemon } from 'src/app/models';
import { PokemonService } from '../services/pokemon.service';
import { Injectable } from '@angular/core';

@Injectable()

export class PokemonRepository {
  public list: Array<IReducedPokemon>;

  constructor(public pokemonService: PokemonService) {
  }

  public init(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.pokemonService
        .getList()
        .then((response: IReducedPokemon[]) => {
          this.list = response;
          console.log(this.list);
          resolve();
        })
        .catch(error => {
          console.error(error);
          reject();
        });
    });
  }

}
