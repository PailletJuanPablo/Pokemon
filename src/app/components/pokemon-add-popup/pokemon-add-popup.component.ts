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
  pokemonsList: Array<IPokemon>;
  constructor(public pokemonRepository: PokemonRepository, public http: HttpClient, public activeModal: NgbActiveModal) {
    this.pokemonsList = this.pokemonRepository.list;
  }
  ngOnInit() {
  }
  searchPokemon(event) {
    const nameToSearch = event.target.value;
    this.pokemonsList = this.pokemonRepository.searchByName(nameToSearch);
  }

}
