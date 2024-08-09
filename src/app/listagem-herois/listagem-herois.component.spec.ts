import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemHeroisComponent } from './listagem-herois.component';

describe('ListagemHeroisComponent', () => {
  let component: ListagemHeroisComponent;
  let fixture: ComponentFixture<ListagemHeroisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListagemHeroisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemHeroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
