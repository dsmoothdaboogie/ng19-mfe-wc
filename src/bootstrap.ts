import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Import bootstrap files for each web component to ensure they are defined
import './bootstrap-widget-a'; 
import './bootstrap-widget-b'; 
import './bootstrap-user-list'; // Add user list
import './bootstrap-stats-summary'; // Add stats summary
import './bootstrap-recent-activity'; // Add recent activity

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err)); 