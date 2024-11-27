import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'cl-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './cl-sidebar.component.html',
  styleUrl: './cl-sidebar.component.scss'
})
export class ClSidebarComponent {
  sideBarConfig = {
    listStyle: {width: '100%', height: '100%'},
    itemStyle: {fontSize: '22px'},
    list: [
      {id: 0, label: 'dashboard', icon: 'home', link: '/dashboard'},
      {id: 1, label: 'users', icon: 'users', link: '/user-management'},
      {id: 2, label: 'reports', icon: 'book', link: '/reports'},
      {id: 3, label: 'payments', icon: 'paypal', link: '/payments'},
      {id: 4, label: 'security', icon: 'lock', link: '/security'},
    ]
  };

  constructor() {
  }
}
