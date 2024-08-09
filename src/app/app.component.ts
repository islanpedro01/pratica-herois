import { Component } from '@angular/core';
import { Heroi } from '../shared/model/heroi'; 
import {ActivatedRoute} from "@angular/router";
import { HEROIS } from '../shared/model/HEROIS';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pratica-herois';
  heroi = new Heroi('','','');
  herois = HEROIS;

constructor(){
  
}
salvarHeroi(){
  this.herois.push(this.heroi);
  this.heroi = new Heroi('','','');
}}
