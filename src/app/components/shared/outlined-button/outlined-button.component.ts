import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-outlined-button',
  standalone: true,
  imports: [],
  templateUrl: './outlined-button.component.html',
  styleUrl: './outlined-button.component.css'
})
export class OutlinedButtonComponent {
  @Input() width: 'small' | 'large' = 'small';
  @Input() height: 'big' | 'normal' = 'normal';
  @Input() color: 'primary' | 'secondary' = 'primary';
  @Input() text: string = '';
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
