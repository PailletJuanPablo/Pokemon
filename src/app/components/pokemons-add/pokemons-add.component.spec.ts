import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsAddComponent } from './pokemons-add.component';

describe('PokemonsAddComponent', () => {
  let component: PokemonsAddComponent;
  let fixture: ComponentFixture<PokemonsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
