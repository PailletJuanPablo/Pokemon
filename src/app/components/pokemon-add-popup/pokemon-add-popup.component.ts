import { Component, OnInit } from '@angular/core';
import { PokemonRepository } from './../../repositories/PokemonRepository';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IPokemon } from 'src/app/models';
@Component({
  selector: 'app-pokemon-add-popup',
  templateUrl: './pokemon-add-popup.component.html',
  styleUrls: ['./pokemon-add-popup.component.scss']
})
export class PokemonAddPopupComponent implements OnInit {
  allPokemonsData: Array<IPokemon>;
  filteredPokemonData = [];
  constructor(public pokemonRepository: PokemonRepository, public http: HttpClient, public activeModal: NgbActiveModal) {
    this.allPokemonsData = this.pokemonRepository.list;
    this.filteredPokemonData = this.allPokemonsData;
  }
  ngOnInit() {
  }
  searchPokemon(event) {
    const nameToSearch = event.target.value;
    this.filteredPokemonData = this.allPokemonsData.filter((pokemon) => {
      return pokemon.name.toLowerCase().match(nameToSearch);
    });
  }

}
