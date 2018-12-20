import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonAddPopupComponent } from '../pokemon-add-popup/pokemon-add-popup.component';

@Component({
  selector: 'app-pokemons-add',
  templateUrl: './pokemons-add.component.html',
  styleUrls: ['./pokemons-add.component.scss']
})
export class PokemonsAddComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    this.modalService.open(PokemonAddPopupComponent);
  }

}
