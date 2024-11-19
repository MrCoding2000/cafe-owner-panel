import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () => import('dashboard/Routes').then((m) => m!.remoteRoutes),
  },
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
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }
];
