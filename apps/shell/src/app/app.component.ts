import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ClSidebarComponent} from "@view/lib/components";
import {Button} from "primeng/button";
import {MainHeaderComponent} from "@view/lib/layouts";

@Component({
  standalone: true,
  imports: [RouterModule, Button, ClSidebarComponent, MainHeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shell';
}
