import { Component, Input, OnInit, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

// Mock Data Interface (optional but good practice)
interface User {
  id: number;
  name: string;
  email: string;
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-user-list', // This selector is used internally by Angular
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() title: string = 'User List';
  @Input() apiUrl?: string;

  users: User[] = [];
  isLoading = false;
  error: string | null = null;

  // Inject Injector for Angular Elements
  constructor(private injector: Injector) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.isLoading = true;
    this.error = null;
    console.log(`UserListComponent: Fetching users. apiUrl provided: ${!!this.apiUrl}`);

    // Simulate API call or use mock data
    // Use mock data (logic changed to select based on apiUrl)
    setTimeout(() => { // Simulate delay
      if (this.apiUrl) {
        console.log('UserListComponent: Using alternative mock users because apiUrl was provided.');
        this.users = this.getAlternativeMockUsers();
      } else {
        console.log('UserListComponent: Using default mock users because apiUrl was not provided.');
        this.users = this.getMockUsers();
      }
      this.isLoading = false;
    }, 500);
    // REMOVE old if/else block related to apiUrl
  }

  private getMockUsers(): User[] {
    return [
      { id: 1, name: 'Alice Smith', email: 'alice@example.com', status: 'Active' },
      { id: 2, name: 'Bob Johnson', email: 'bob.j@sample.net', status: 'Active' },
      { id: 3, name: 'Charlie Brown', email: 'charlie@domain.org', status: 'Inactive' },
      { id: 4, name: 'Diana Prince', email: 'diana@themyscira.gov', status: 'Active' },
    ];
  }

  // Add a second mock data function
  private getAlternativeMockUsers(): User[] {
    console.log('UserListComponent: Generating alternative mock users.');
    return [
      { id: 101, name: 'Peter Parker', email: 'p.parker@dailybugle.com', status: 'Active' },
      { id: 102, name: 'Mary Jane Watson', email: 'mj.watson@example.com', status: 'Active' },
      { id: 103, name: 'Norman Osborn', email: 'norman@oscorp.biz', status: 'Inactive' },
    ];
  }
} 