import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  { path: 'pqrcode', loadChildren: './pages/pqrcode/pqrcode.module#PQRCodePageModule' },
  { path: 'minformacoes', loadChildren: './pages/minformacoes/minformacoes.module#MInformacoesPageModule' },
  { path: 'sobre', loadChildren: './pages/sobre/sobre.module#SobrePageModule' },
  { path: 'principal', loadChildren: './pages/principal/principal.module#PrincipalPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'lista-itens', loadChildren: './pages/lista-itens/lista-itens.module#ListaItensPageModule' },
  { path: 'adicionar-item', loadChildren: './pages/adicionar-item/adicionar-item.module#AdicionarItemPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
