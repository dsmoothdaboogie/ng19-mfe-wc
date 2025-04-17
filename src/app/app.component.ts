import { Component, Injector, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// No longer need createCustomElement or the component imports here
// import { createCustomElement } from '@angular/elements';
// import { WidgetAComponent } from './widgets/widget-a/widget-a.component'; // Path updated
// import { WidgetBComponent } from './widgets/widget-b/widget-b.component'; // Path updated
// import { UserListComponent } from './widgets/user-list/user-list.component';
// import { StatsSummaryComponent } from './widgets/stats-summary/stats-summary.component';
// import { RecentActivityComponent } from './widgets/recent-activity/recent-activity.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'ng19-mfe-components';
  
  // Injector is no longer needed here for defining elements
  // private injector = inject(Injector);

  constructor() {
    console.log('AppComponent constructor: Application loaded. Widgets are exposed via Federation config.');
    // Remove custom element definition logic
    /*
    const elements: { [key: string]: any } = {
      'widget-a-element': WidgetAComponent,
      'widget-b-element': WidgetBComponent,
      'user-list-widget': UserListComponent,
      'stats-summary-widget': StatsSummaryComponent,
      'recent-activity-widget': RecentActivityComponent
    };

    for (const [name, component] of Object.entries(elements)) {
      if (!customElements.get(name)) {
        const element = createCustomElement(component, { injector: this.injector });
        customElements.define(name, element);
        console.log(`Defined custom element: <${name}>`);
      } else {
        console.log(`Custom element <${name}> already defined.`);
      }
    }
    */
  }
}
