import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() width: 'small' | 'large' = 'small';
  // @Input() color: 'primary' | 'secondary' = 'primary';
  @Input() text: string = '';
}
