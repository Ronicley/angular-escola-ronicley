import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListaDeTurmasComponent} from './lista-de-turmas/lista-de-turmas.component';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import {TurmaComponent} from './turma/turma.component';
import {ListaDeDisciplinasComponent} from "./lista-de-disciplinas/lista-de-disciplinas.component";
import {DisciplinaComponent} from "./disciplina/disciplina.component";
import {CadastroDeDisciplinaComponent} from "./cadastro-de-disciplina/cadastro-de-disciplina.component";
import {CadastroDeTurmaComponent} from "./cadastro-de-turma/cadastro-de-turma.component";
import {ListaDePessoasComponent} from "./lista-de-pessoas/lista-de-pessoas.component";
import { PessoaComponent } from './pessoa/pessoa.component';

const appRoutes: Routes = [
  {path: 'cadastrar-disciplina', component: CadastroDeDisciplinaComponent},
  {path: 'cadastrar-turma', component: CadastroDeTurmaComponent},
  {path: 'disciplinas', component: ListaDeDisciplinasComponent},
  {path: 'pessoas', component: ListaDePessoasComponent},
  {path: 'disciplinas/:id', component: DisciplinaComponent},
  {path: 'pessoas/:id', component: PessoaComponent},
  {path: 'turmas', component: ListaDeTurmasComponent},
  {path: 'turmas/:id', component: TurmaComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- apenas para depuração
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
