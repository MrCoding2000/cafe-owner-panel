import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
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
