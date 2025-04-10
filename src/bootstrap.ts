import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Import and execute the web component definitions for local testing
import './bootstrap-web-components';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err)); 