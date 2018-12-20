import { Component, OnInit, Input } from '@angular/core';
import { EventsService } from 'src/app/services/events-service.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {

  @Input() pokemon: any;
  constructor(private eventsService: EventsService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  sendPokemon(pokemon): void {
    this.activeModal.dismiss();
    // send message to subscribers via observable subject
    this.eventsService.sendAction({ type: 'add', pokemon });
  }

}
