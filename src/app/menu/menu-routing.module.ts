import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'usuario',
        loadChildren: () => import('./usuario/usuario.module').then( m => m.UsuarioPageModule)
      },
      {
        path: 'ayuda',
        loadChildren: () => import('./ayuda/ayuda.module').then( m => m.AyudaPageModule)
      },
      {
        path: 'desarrollador',
        loadChildren: () => import('./desarrollador/desarrollador.module').then( m => m.DesarrolladorPageModule)
      }

    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
