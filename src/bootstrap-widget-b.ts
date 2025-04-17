import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ApplicationRef, Injector } from '@angular/core'; // Import ApplicationRef and Injector

import { WidgetBComponent } from './app/widgets/widget-b/widget-b.component';

// Define the custom element tag name
const WIDGET_B_TAG_NAME = 'widget-b-element';

// IIFE to bootstrap and define the element
(async () => {
    console.log(`[${WIDGET_B_TAG_NAME}] bootstrap executing...`);
    if (customElements.get(WIDGET_B_TAG_NAME)) {
        console.log(`[${WIDGET_B_TAG_NAME}] already defined.`);
        return;
    }
    try {
        // Create minimal app context to get an injector
        const appRef: ApplicationRef = await createApplication();
        const injector: Injector = appRef.injector;
        console.log(`[${WIDGET_B_TAG_NAME}] Minimal AppRef created.`);

        // Create and define the custom element
        const element = createCustomElement(WidgetBComponent, { injector });
        customElements.define(WIDGET_B_TAG_NAME, element);
        console.log(`[${WIDGET_B_TAG_NAME}] Defined successfully.`);

        // Optional: Destroy the temporary bootstrap app 
        // appRef.destroy(); 

    } catch (err) {
        console.error(`[${WIDGET_B_TAG_NAME}] Error:', err`);
    }
})(); 