import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },  
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
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
