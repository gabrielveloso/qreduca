import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'pqrcode', loadChildren: './pages/pqrcode/pqrcode.module#PQRCodePageModule' ,canActivate: [AuthGuard] },
  { path: 'minformacoes', loadChildren: './pages/minformacoes/minformacoes.module#MInformacoesPageModule' ,canActivate: [AuthGuard]},
  { path: 'sobre', loadChildren: './pages/sobre/sobre.module#SobrePageModule' ,canActivate: [AuthGuard]},

  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule',canActivate: [LoginGuard] },

  { path: 'lista-itens', loadChildren: './pages/lista-itens/lista-itens.module#ListaItensPageModule' ,canActivate: [AuthGuard]},
  { path: 'adicionar-item', loadChildren: './pages/adicionar-item/adicionar-item.module#AdicionarItemPageModule' },
  { path: 'detalhamento-item/:id', loadChildren: './pages/detalhamento-item/detalhamento-item.module#DetalhamentoItemPageModule' ,canActivate: [AuthGuard]},
  { path: 'mapa', loadChildren: './pages/mapa/mapa.module#MapaPageModule' ,canActivate: [AuthGuard] }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
