import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Month } from '../../models/month.model';
import { Day } from 'src/app/models/day.model';
import { Event } from 'src/app/models/event.model';

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

  @Output('updateEvent')
  private _updateEvent = new EventEmitter<Event>();

  createEvent(day: Day) {
    this._createEvent.emit(day);
  }

  updateEvent(day: Event) {
    this._updateEvent.emit(day);
  }
}
