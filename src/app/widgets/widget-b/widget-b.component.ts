import { Component, Injector } from '@angular/core';

@Component({
  selector: 'app-widget-b',
  standalone: true,
  imports: [],
  templateUrl: './widget-b.component.html',
  styleUrl: './widget-b.component.css'
})
export class WidgetBComponent {
  constructor(private injector: Injector) {}
} 