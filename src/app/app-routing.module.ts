import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AreaInstrutorComponent } from './area-instrutor/area-instrutor.component';
import { AreaAlunoComponent } from './area-aluno/area-aluno.component';
import { AtividadesComponent } from './atividades/atividades.component';
import { AuthGuardsService } from './guardas/auth.guards';
import { InstrutorGuardsService } from './guardas/instrutor.guards';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: '20200314', component: AreaInstrutorComponent, canActivate: [AuthGuardsService, InstrutorGuardsService]},
  { path: '20200316', component: AreaAlunoComponent, canActivate: [AuthGuardsService, InstrutorGuardsService]},
  { path: '20200325', component: AtividadesComponent, canActivate: [AuthGuardsService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
