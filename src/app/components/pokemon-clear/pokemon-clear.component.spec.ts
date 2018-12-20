import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonClearComponent } from './pokemon-clear.component';

describe('PokemonClearComponent', () => {
  let component: PokemonClearComponent;
  let fixture: ComponentFixture<PokemonClearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonClearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
