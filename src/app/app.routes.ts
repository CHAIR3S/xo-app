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
            loadComponent: () => import('./profile/profile.page').then(m => m.ProfilePage),
          },
          {
            path: 'create-event',
            loadComponent: () => import('./create-event/create-event.page').then(m => m.CreateEventPage) 
          },
          {
            path: 'search',
            loadComponent: () => import('./search/search.page').then(m => m.SearchPage)
          },
          {
            path: 'tickets/:event-id',
            loadComponent: () => import('./tickets/tickets.page').then(m => m.TicketsPage)
          },
          {
            path: 'event/:event-id',
            loadComponent: () => import('./event/event.page').then(m => m.EventPage)
          }
          
        ]
      },
      {
        path: 'login',
        loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
      }
    ]
  },
  
  {
    path: '',
    redirectTo: '/app/page/home',
    pathMatch: 'full'
  }
];
