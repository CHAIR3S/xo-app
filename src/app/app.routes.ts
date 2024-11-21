import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  {
    path: 'home', 
    title: 'All Events' , 
    component: HomePage
  },
  {
    path: 'profile/:profile-name',
    title: ':profile-name',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },

  

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];
