import { Component, Input, OnInit, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatItem {
  label: string;
  value: number | string;
  icon?: string; // Optional icon class (e.g., Font Awesome)
}

@Component({
  selector: 'app-stats-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-summary.component.html',
  styleUrls: ['./stats-summary.component.css']
})
export class StatsSummaryComponent implements OnInit {
  @Input() title: string = 'Summary';
  @Input() statsData?: { [key: string]: StatItem };

  stats: StatItem[] = [];

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    this.stats = this.statsData ? Object.values(this.statsData) : this.getMockStats();
  }

  private getMockStats(): StatItem[] {
    return [
      { label: 'Total Users', value: 156, icon: 'fa fa-users' },
      { label: 'Active Today', value: 78, icon: 'fa fa-check-circle' },
      { label: 'Pending Invites', value: 12, icon: 'fa fa-envelope' },
      { label: 'Errors Today', value: 3, icon: 'fa fa-exclamation-triangle' }
    ];
  }
} 