import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ApplicationRef } from '@angular/core';
import { WidgetAComponent } from './app/components/widget-a/widget-a.component';

console.log('bootstrap-widget-a.ts executing');

(async () => {
  try {
    const app: ApplicationRef = await createApplication();
    console.log('[bootstrap-widget-a] Minimal Angular AppRef created.');
    if (!customElements.get('widget-a-element')) {
      const WidgetAElement = createCustomElement(WidgetAComponent, { injector: app.injector });
      customElements.define('widget-a-element', WidgetAElement);
      console.log('[bootstrap-widget-a] Defined widget-a-element');
    }
  } catch (err) { console.error('[bootstrap-widget-a] Error:', err); }
})(); 