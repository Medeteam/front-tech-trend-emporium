import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-alert',
  standalone: true,
  imports: [],
  templateUrl: './simple-alert.component.html',
  styleUrl: './simple-alert.component.css'
})
export class SimpleAlertComponent {
  @Input() type: 'success' | 'error' | 'warning' = 'success';
  @Input() text: string = '';
}
