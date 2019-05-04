import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarComponent } from './component/listar/listar.component';
import { LoginComponent } from './component/login/login.component';
import { CadastrarPalavraComponent } from './component/cadastrar-palavra/cadastrar-palavra.component';
import { AuthGuard} from './auth/auth.guard';
import { ListarPalavraComponent } from './component/listar-palavra/listar-palavra.component';
import { HomeComponent } from './component/home/home.component';
import { UsuarioResolver } from './resolver/usuario.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'listar/usuarios',
    component: ListarComponent, canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'cadastrar',
    component: CadastrarPalavraComponent,  canActivate:[AuthGuard]
  },
  {
    path:'listar/palavras',
    component: ListarPalavraComponent, canActivate:[AuthGuard]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
