import { Component, Input } from '@angular/core';
import { Month } from '../../models/month.model';

@Component({
  selector: 'app-month',
  templateUrl: 'month.component.html',
  styleUrls: ['month.component.scss'],
})
export class MonthComponent {
  @Input()
  month: Month;
}
