import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsAddedListComponent } from './pokemons-added-list.component';

describe('PokemonsAddedListComponent', () => {
  let component: PokemonsAddedListComponent;
  let fixture: ComponentFixture<PokemonsAddedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsAddedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsAddedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
