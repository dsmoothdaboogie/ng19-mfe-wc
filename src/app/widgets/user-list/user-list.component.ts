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
    console.log(`UserListComponent: Fetching users from ${this.apiUrl || 'mock data'}...`);

    // Simulate API call or use mock data
    if (this.apiUrl) {
      // Placeholder for actual fetch logic
      console.warn('API fetching not implemented yet, using mock data.');
      this.users = this.getMockUsers();
      this.isLoading = false;
      // fetch(this.apiUrl).then(...).catch(...);
    } else {
      // Use mock data
      setTimeout(() => { // Simulate delay
        this.users = this.getMockUsers();
        this.isLoading = false;
      }, 500);
    }
  }

  private getMockUsers(): User[] {
    return [
      { id: 1, name: 'Alice Smith', email: 'alice@example.com', status: 'Active' },
      { id: 2, name: 'Bob Johnson', email: 'bob.j@sample.net', status: 'Active' },
      { id: 3, name: 'Charlie Brown', email: 'charlie@domain.org', status: 'Inactive' },
      { id: 4, name: 'Diana Prince', email: 'diana@themyscira.gov', status: 'Active' },
    ];
  }
} 