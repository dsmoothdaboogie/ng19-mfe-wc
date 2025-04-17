import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ApplicationRef, NgZone } from '@angular/core';

// Import your standalone components
import { WidgetAComponent } from './app/components/widget-a/widget-a.component';
import { WidgetBComponent } from './app/components/widget-b/widget-b.component';

console.log('bootstrap-web-components.ts executing');

// Define a function to bootstrap the Angular application context needed by the elements
// We use createApplication for a minimal app context without bootstrapping a root component
async function bootstrapElements() {
  try {
    const app: ApplicationRef = await createApplication();
    console.log('Minimal Angular AppRef created for elements.');

    // Retrieve NgZone instance if needed (might be useful for some components)
    // const ngZone = app.injector.get(NgZone);

    // Define Widget A
    if (!customElements.get('widget-a-element')) {
      const WidgetAElement = createCustomElement(WidgetAComponent, { injector: app.injector });
      customElements.define('widget-a-element', WidgetAElement);
      console.log('Defined widget-a-element');
    } else {
      console.log('widget-a-element already defined');
    }

    // Define Widget B
    if (!customElements.get('widget-b-element')) {
      const WidgetBElement = createCustomElement(WidgetBComponent, { injector: app.injector });
      customElements.define('widget-b-element', WidgetBElement);
      console.log('Defined widget-b-element');
    } else {
      console.log('widget-b-element already defined');
    }

  } catch (err) {
    console.error('Error bootstrapping web components:', err);
  }
}

// Immediately invoke the bootstrap function when this module is loaded
bootstrapElements(); 