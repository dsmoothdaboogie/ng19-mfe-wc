import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ApplicationRef, Injector } from '@angular/core';

import { RecentActivityComponent } from './app/widgets/recent-activity/recent-activity.component';

const TAG_NAME = 'recent-activity-widget';

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

        const element = createCustomElement(RecentActivityComponent, { injector });
        customElements.define(TAG_NAME, element);
        console.log(`[${TAG_NAME}] Defined successfully.`);
        // appRef.destroy(); // Optional cleanup
    } catch (err) {
        console.error(`[${TAG_NAME}] Error:', err`);
    }
})(); 