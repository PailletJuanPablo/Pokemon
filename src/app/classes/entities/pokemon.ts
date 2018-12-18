import { IPokemon } from 'src/app/models';

export class Pokemon implements IPokemon {
  id: string;
  name: string;
  sprite: string;
  type: string;

  constructor(pokemon: IPokemon) {
    this.id = pokemon.id;
    this.name = pokemon.name;
    this.sprite = pokemon.sprite;
    this.type = pokemon.type;
  }

}
