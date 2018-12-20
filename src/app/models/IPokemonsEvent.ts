import { IPokemon } from './IPokemon';

export interface IPokemonEvent {
  type: 'clear' | 'add';
  pokemon: IPokemon;
}
