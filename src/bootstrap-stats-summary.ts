import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ApplicationRef, Injector } from '@angular/core';

import { StatsSummaryComponent } from './app/widgets/stats-summary/stats-summary.component';

const TAG_NAME = 'stats-summary-widget';

(async () => {
    console.log(`[${TAG_NAME}] bootstrap executing...`);
    if (customElements.get(TAG_NAME)) {
        console.log(`[${TAG_NAME}] already defined.`);
        return;
    }
    try {
        const appRef: ApplicationRef = await createApplication();
        const injector: Injector = appRef.injector;
        console.log(`[${TAG_NAME}] Minimal AppRef created.`);

        const element = createCustomElement(StatsSummaryComponent, { injector });
        customElements.define(TAG_NAME, element);
        console.log(`[${TAG_NAME}] Defined successfully.`);
        // appRef.destroy(); // Optional cleanup
    } catch (err) {
        console.error(`[${TAG_NAME}] Error:', err`);
    }
})(); 