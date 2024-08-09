import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemHeroisComponent } from './listagem-herois/listagem-herois.component';
import { CadastroHeroiComponent } from './cadastro-heroi/cadastro-heroi.component';

const routes: Routes = [
  {
    path: 'cadastro-heroi',
    component: CadastroHeroiComponent

  },
  {
    path: 'listagem-herois',
    component: ListagemHeroisComponent
},
{
  path: 'edicao-heroi/:nome',
  component: CadastroHeroiComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
