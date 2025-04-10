import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Import individual web component definitions for local testing
// import './bootstrap-web-components'; // Remove old
import './bootstrap-widget-a'; // Add new
import './bootstrap-widget-b'; // Add new

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err)); 