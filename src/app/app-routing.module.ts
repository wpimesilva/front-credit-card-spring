import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEstudanteComponent } from './cadastro-estudante/cadastro-estudante.component';
import { HomeComponent } from './home/home.component';
import { CadastroBuscarEstudanteComponent } from "./cadastro-transacao/buscar/cadastro-buscar-transacao.component"
import { CadastroTransacaoEstudanteComponent } from './cadastro-transacao/cadastrar/cadastro-transacao-estudante.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'c', component: CadastroEstudanteComponent },
  { path: 'cadastro-buscar-transacao', component: CadastroBuscarEstudanteComponent },
  { path: 'cadastro-transacao/:id', component: CadastroTransacaoEstudanteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
