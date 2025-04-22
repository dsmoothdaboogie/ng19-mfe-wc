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
  @Input() reverse: boolean = false; // Add reverse input

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
      const allActivities = this.getMockActivities(); // Get all 20 items
      // Apply slicing based on reverse flag
      this.activities = this.reverse ? allActivities.slice(-this.maxItems) : allActivities.slice(0, this.maxItems);
      this.isLoading = false;
      // fetch(this.activityApiUrl).then(...).catch(...);
    } else {
      setTimeout(() => {
        const allActivities = this.getMockActivities(); // Get all 20 items
        // Apply slicing based on reverse flag
        this.activities = this.reverse ? allActivities.slice(-this.maxItems) : allActivities.slice(0, this.maxItems);
        this.isLoading = false;
      }, 700); // Slightly different delay
    }
  }

  private getMockActivities(): ActivityItem[] {
    const now = Date.now();
    // Expand to 20 mock items
    return [
      { id: 1, timestamp: new Date(now - 60000 * 5), description: 'logged in', user: 'Alice Smith' },
      { id: 2, timestamp: new Date(now - 60000 * 15), description: 'updated their profile', user: 'Bob Johnson' },
      { id: 3, timestamp: new Date(now - 60000 * 35), description: 'uploaded report.pdf' },
      { id: 4, timestamp: new Date(now - 60000 * 70), description: "added a new task 'Prepare Presentation'" },
      { id: 5, timestamp: new Date(now - 60000 * 125), description: 'logged out', user: 'Alice Smith' },
      { id: 6, timestamp: new Date(now - 60000 * 180), description: 'changed password', user: 'Charlie Brown' },
      { id: 7, timestamp: new Date(now - 60000 * 210), description: 'commented on Project Alpha', user: 'Diana Prince' },
      { id: 8, timestamp: new Date(now - 60000 * 245), description: 'joined the marketing channel', user: 'Bob Johnson' },
      { id: 9, timestamp: new Date(now - 60000 * 290), description: 'completed task \'Review Budget\'' },
      { id: 10, timestamp: new Date(now - 60000 * 330), description: 'logged in', user: 'Charlie Brown' },
      { id: 11, timestamp: new Date(now - 60000 * 380), description: 'shared document \'Q3 Goals.docx\'' },
      { id: 12, timestamp: new Date(now - 60000 * 420), description: 'updated contact info', user: 'Alice Smith' },
      { id: 13, timestamp: new Date(now - 60000 * 470), description: 'assigned task to Bob Johnson' },
      { id: 14, timestamp: new Date(now - 60000 * 510), description: 'started video call with Diana Prince', user: 'Alice Smith' },
      { id: 15, timestamp: new Date(now - 60000 * 560), description: 'created new project \'Website Redesign\'' },
      { id: 16, timestamp: new Date(now - 60000 * 600), description: 'logged out', user: 'Bob Johnson' },
      { id: 17, timestamp: new Date(now - 60000 * 650), description: 'deleted file \'old_notes.txt\'' },
      { id: 18, timestamp: new Date(now - 60000 * 700), description: 'sent direct message', user: 'Diana Prince' },
      { id: 19, timestamp: new Date(now - 60000 * 740), description: 'approved expense report', user: 'Charlie Brown' },
      { id: 20, timestamp: new Date(now - 60000 * 790), description: 'set status to \'Away\'', user: 'Alice Smith' },
    ].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()); // Sort newest first
  }
} 