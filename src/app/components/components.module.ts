import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map-component/map-component.component';
import { PokemonAddPopupComponent } from './pokemon-add-popup/pokemon-add-popup.component';
import { PokemonClearComponent } from './pokemon-clear/pokemon-clear.component';
import { PokemonsAddComponent } from './pokemons-add/pokemons-add.component';
import { PokemonsAddedListComponent } from './pokemons-added-list/pokemons-added-list.component';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { NguiMapModule } from '@ngui/map';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { environment } from '../../environments/environment';
import { MusicButtonComponent } from './music-button/music-button.component';

@NgModule({
  imports: [
    CommonModule,
    VirtualScrollerModule,
    NguiMapModule.forRoot({ apiUrl: environment.ng2MapsUrl }),
  ],
  declarations: [
    MapComponent,
    PokemonAddPopupComponent,
    PokemonClearComponent,
    PokemonsAddComponent,
    PokemonsAddedListComponent,
    PokemonItemComponent,
    MusicButtonComponent
  ],
  exports: [
    MapComponent,
    PokemonAddPopupComponent,
    PokemonClearComponent,
    PokemonsAddComponent,
    PokemonsAddedListComponent,
    PokemonItemComponent,
    MusicButtonComponent
  ]
})
export class ComponentsModule { }
