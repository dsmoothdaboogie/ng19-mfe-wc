import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ApplicationRef } from '@angular/core';
import { WidgetBComponent } from './app/components/widget-b/widget-b.component';

console.log('bootstrap-widget-b.ts executing');

(async () => {
  try {
    const app: ApplicationRef = await createApplication();
    console.log('[bootstrap-widget-b] Minimal Angular AppRef created.');
    if (!customElements.get('widget-b-element')) {
      const WidgetBElement = createCustomElement(WidgetBComponent, { injector: app.injector });
      customElements.define('widget-b-element', WidgetBElement);
      console.log('[bootstrap-widget-b] Defined widget-b-element');
    }
  } catch (err) { console.error('[bootstrap-widget-b] Error:', err); }
})(); 