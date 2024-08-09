import { Component } from '@angular/core';
import { Heroi } from '../../shared/model/heroi'; 
import {ActivatedRoute} from "@angular/router";
import { HEROIS } from '../../shared/model/HEROIS';


@Component({
  selector: 'app-root',
  templateUrl: './cadastro-heroi.component.html',
  styleUrl: './cadastro-heroi.component.css',
})
export class CadastroHeroiComponent {
  title = 'pratica-herois';
  heroi = new Heroi('','','');
  herois = HEROIS;
  edicao = false;

constructor(private rota: ActivatedRoute){
  const nomeHeroi = this.rota.snapshot.paramMap.get('nome');
    if(nomeHeroi){
      this.edicao = true;
      this.heroi = this.herois.find(heroi => heroi.nome == nomeHeroi) as Heroi;
    }
  
  
}
salvarHeroi(){
  if (!this.edicao){
  this.herois.push(this.heroi);
  this.heroi = new Heroi('','','');
}else{

}}}
