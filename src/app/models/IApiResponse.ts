import { IPokemon } from './IPokemon';

export interface IResponse {
  ok: boolean;
  data: Array<IPokemon>;
}
