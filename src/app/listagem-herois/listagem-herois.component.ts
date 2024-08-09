import { Component } from '@angular/core';
import { Heroi } from '../../shared/model/heroi';
import { HEROIS } from '../../shared/model/HEROIS';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-herois',
  templateUrl: './listagem-herois.component.html',
  styleUrl: './listagem-herois.component.css'
})
export class ListagemHeroisComponent {
  herois = HEROIS;

  constructor(private roteador: Router) {

  
}
remover(removeheroi:Heroi) {
  this.herois = this.herois.filter(heroi => heroi.nome != removeheroi.nome);
}
editar(heroiEdit:Heroi){
  this.roteador.navigate(['/edicao-heroi', heroiEdit.nome]);

}

}
