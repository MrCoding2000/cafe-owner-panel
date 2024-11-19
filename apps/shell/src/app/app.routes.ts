import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'security',
    loadChildren: () => import('security/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'payments',
    loadChildren: () => import('payments/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'reports',
    loadChildren: () => import('reports/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'user_management',
    loadChildren: () =>
      import('user_management/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
