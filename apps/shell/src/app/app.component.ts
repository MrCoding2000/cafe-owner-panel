import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ClSideBarComponent} from "@view/lib/components";
import {Button} from "primeng/button";

@Component({
  standalone: true,
  imports: [RouterModule, ClSideBarComponent, Button],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shell';
}
