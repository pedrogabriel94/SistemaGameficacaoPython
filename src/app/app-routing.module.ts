import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AreaInstrutorComponent } from './area-instrutor/area-instrutor.component';
import { AreaAlunoComponent } from './area-aluno/area-aluno.component';
import { AuthGuardsService } from './guardas/auth.guards';
import { ChildGuards } from './guardas/child.guards';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: '20200314', component: AreaInstrutorComponent, canActivate: [AuthGuardsService], canActivateChild: [ChildGuards]},
  { path: '20200316', component: AreaAlunoComponent, canActivate: [AuthGuardsService], canActivateChild: [ChildGuards]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
