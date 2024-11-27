import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-main-header',
  standalone: true,
  imports: [],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {
  @Input() headerName!: string;

}
