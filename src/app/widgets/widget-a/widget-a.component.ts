import { Component, Injector } from '@angular/core';

@Component({
  selector: 'app-widget-a',
  standalone: true, 
  imports: [],
  templateUrl: './widget-a.component.html',
  styleUrl: './widget-a.component.css'
})
export class WidgetAComponent {
  constructor(private injector: Injector) {}
} 