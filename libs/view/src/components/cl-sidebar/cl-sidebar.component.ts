import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'cl-sidebar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cl-sidebar.component.html',
  styleUrl: './cl-sidebar.component.css'
})
export class ClSidebarComponent {
  sideBarConfig = {
    listStyle: {width: '20%', height: '20%'},
    itemStyle: {fontSize: '22px'},
    list: [
      {id: 0, label: 'sidebar.dashboard', icon: 'home', link: '/dashboard'},
      {id: 1, label: 'sidebar.user-management', icon: 'users', link: '/user-management'},
      {id: 2, label: 'sidebar.reports', icon: 'book', link: '/reports'},
      {id: 3, label: 'sidebar.payments', icon: 'paypal', link: '/payments'},
      {id: 4, label: 'sidebar.security', icon: 'lock', link: '/security'},
    ]
  };

  constructor() {
  }
}
