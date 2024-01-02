import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {
  BigCardComponent,
  MenuBarComponent,
  MenuTitleComponent,
  SmallCardComponent
 } from './components/index'

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BigCardComponent,
    MenuBarComponent,
    MenuTitleComponent,
    SmallCardComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "angular-blog";
}
