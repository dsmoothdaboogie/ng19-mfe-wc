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
  @Input() api?: string; // Add api input

  stats: StatItem[] = [];

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    // Use provided statsData if available, otherwise select mock based on api input
    if (this.statsData) {
      console.log('StatsSummaryComponent: Using provided statsData input.');
      this.stats = Object.values(this.statsData);
    } else if (this.api) {
      console.log('StatsSummaryComponent: Using investment banking mock stats because api input was provided.');
      this.stats = this.getInvestmentBankingMockStats();
    } else {
      console.log('StatsSummaryComponent: Using default mock stats.');
      this.stats = this.getMockStats();
    }
  }

  private getMockStats(): StatItem[] {
    return [
      { label: 'Total Users', value: 156, icon: 'fa fa-users' },
      { label: 'Active Today', value: 78, icon: 'fa fa-check-circle' },
      { label: 'Pending Invites', value: 12, icon: 'fa fa-envelope' },
      { label: 'Errors Today', value: 3, icon: 'fa fa-exclamation-triangle' }
    ];
  }

  // Add alternative mock data
  private getInvestmentBankingMockStats(): StatItem[] {
    console.log('StatsSummaryComponent: Generating investment banking mock stats.');
    return [
      { label: 'Trades Executed', value: '1,250', icon: 'fa fa-exchange-alt' },
      { label: 'Portfolio Value', value: '$15.6M', icon: 'fa fa-chart-line' },
      { label: 'Compliance Alerts', value: 4, icon: 'fa fa-gavel' },
      { label: 'Market Sentiment', value: 'Positive', icon: 'fa fa-thumbs-up' }
    ];
  }
} 