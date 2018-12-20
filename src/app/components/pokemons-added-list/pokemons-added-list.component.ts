import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events-service.service';
import { Subscription } from 'rxjs';
import { IPokemonEvent } from './../../models/IPokemonsEvent';

@Component({
  selector: 'app-pokemons-added-list',
  templateUrl: './pokemons-added-list.component.html',
  styleUrls: ['./pokemons-added-list.component.scss']
})
export class PokemonsAddedListComponent implements OnInit {
  subscription: Subscription;

  addedPokemons = [];
  constructor(private eventsService: EventsService) {
    this.subscription = this.eventsService.listenEvents().subscribe((event: IPokemonEvent) => {
      if (event.type === 'clear') {
        this.addedPokemons = [];
      } else {
        this.addedPokemons.push(event.pokemon);
      }
    });
  }

  ngOnInit() {
  }

}
