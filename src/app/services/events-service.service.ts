import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IPokemonEvent } from '../models/IPokemonsEvent';
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private subject = new Subject<any>();
  constructor() { }

  sendAction(event: IPokemonEvent) {
    if (event.type === 'add') {
      return this.subject.next({ type: event.type, pokemon: event.pokemon });
    }
    if (event.type === 'clear') {
      this.subject.next({ type: event.type });
    }
  }

  listenEvents(): Observable<any> {
    return this.subject.asObservable();
  }

}
