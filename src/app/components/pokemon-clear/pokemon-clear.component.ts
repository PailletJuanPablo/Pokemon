import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events-service.service';

@Component({
  selector: 'app-pokemon-clear',
  templateUrl: './pokemon-clear.component.html',
  styleUrls: ['./pokemon-clear.component.scss']
})
export class PokemonClearComponent implements OnInit {

  constructor(public eventsService: EventsService) { }

  ngOnInit() {
  }

  clearPokemons() {
    this.eventsService.sendAction({ type: 'clear' });
  }

}
