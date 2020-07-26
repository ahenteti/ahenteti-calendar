import { Component, OnInit, Input } from '@angular/core';
import { Month } from '../../models/month.model';

@Component({
  selector: 'app-month',
  templateUrl: 'month.component.html',
  styleUrls: ['month.component.scss'],
})
export class MonthComponent implements OnInit {
  @Input()
  year = new Date().getFullYear();

  @Input('month')
  monthInt = new Date().getMonth();

  month: Month;

  ngOnInit() {
    this.month = new Month({ month: this.monthInt, year: this.year });
  }
}
