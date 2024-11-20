import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  {
    path: 'home', 
    title: 'All Events' , 
    component: HomePage
  },


  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
