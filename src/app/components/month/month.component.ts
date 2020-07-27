import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Month } from '../../models/month.model';
import { Day } from 'src/app/models/day.model';

@Component({
  selector: 'app-month',
  templateUrl: 'month.component.html',
  styleUrls: ['month.component.scss'],
})
export class MonthComponent {
  @Input()
  month: Month;

  @Output('createEvent')
  private _createEvent = new EventEmitter<Day>();

  createEvent(day: Day) {
    this._createEvent.emit(day);
  }
}
