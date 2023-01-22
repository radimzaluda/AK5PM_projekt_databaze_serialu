import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'serialy',
    loadChildren: () => import('./pages/serialy/serialy.module').then( m => m.SerialyPageModule)
  },
  {
    path: 'serialy/:id',
    loadChildren: () => import('./pages/serialinfo/serialinfo.module').then( m => m.SerialinfoPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'movies/:id',
    loadChildren: () => import('./pages/movieinfo/movieinfo.module').then( m => m.MovieinfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
