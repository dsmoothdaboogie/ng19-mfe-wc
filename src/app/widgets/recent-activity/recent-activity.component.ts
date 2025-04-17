import { Component, Input, OnInit, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ActivityItem {
  id: number;
  timestamp: Date;
  description: string;
  user?: string;
}

@Component({
  selector: 'app-recent-activity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.css']
})
export class RecentActivityComponent implements OnInit {
  @Input() title: string = 'Recent Activity';
  @Input() activityApiUrl?: string;
  @Input() maxItems: number = 5; // Max items to display

  activities: ActivityItem[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    this.fetchActivities();
  }

  fetchActivities(): void {
    this.isLoading = true;
    this.error = null;
    console.log(`RecentActivityComponent: Fetching activities from ${this.activityApiUrl || 'mock data'}...`);

    if (this.activityApiUrl) {
      console.warn('API fetching not implemented yet, using mock data.');
      this.activities = this.getMockActivities().slice(0, this.maxItems);
      this.isLoading = false;
      // fetch(this.activityApiUrl).then(...).catch(...);
    } else {
      setTimeout(() => {
        this.activities = this.getMockActivities().slice(0, this.maxItems);
        this.isLoading = false;
      }, 700); // Slightly different delay
    }
  }

  private getMockActivities(): ActivityItem[] {
    const now = Date.now();
    return [
      { id: 1, timestamp: new Date(now - 60000 * 5), description: 'logged in', user: 'Alice Smith' },
      { id: 2, timestamp: new Date(now - 60000 * 15), description: 'updated their profile', user: 'Bob Johnson' },
      { id: 3, timestamp: new Date(now - 60000 * 35), description: 'uploaded report.pdf' },
      { id: 4, timestamp: new Date(now - 60000 * 70), description: "added a new task 'Prepare Presentation'" },
      { id: 5, timestamp: new Date(now - 60000 * 125), description: 'logged out', user: 'Alice Smith' },
      { id: 6, timestamp: new Date(now - 60000 * 180), description: 'changed password', user: 'Charlie Brown' },
    ].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()); // Sort newest first
  }
} 