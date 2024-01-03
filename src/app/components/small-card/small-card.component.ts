
import { Component, Input } from '@angular/core';
import { RouterModule} from '@angular/router'

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  cardCover: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardId: string = '0';
    constructor() { }
}
