import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'app',
    component: AppComponent,
    children: [
      {
        path: 'page',
        loadComponent: () => import('./app/app.page').then(m => m.AppPage),
        children: [
          {
            path: 'home',
            component: HomePage,
          },
          {
            path: 'profile/:username',
            loadComponent: () => import('./profile/profile.page').then(m => m.ProfilePage)
          },
          {
            path: 'create-event',
            loadComponent: () => import('./create-event/create-event.page').then(m => m.CreateEventComponent) 
          }
        ]
      }
    ]
  },
  
  {
    path: '',
    redirectTo: '/app/page/home',
    pathMatch: 'full'
  },
];
