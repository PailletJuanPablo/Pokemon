import { IReducedPokemon } from 'src/app/models';

export interface IResponse {
  count: string;
  next: string;
  previous: string;
  results: Array<IReducedPokemon>;
}
