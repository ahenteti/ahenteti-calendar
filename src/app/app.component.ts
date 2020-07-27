import { Component } from '@angular/core';
import { Month } from './models/month.model';
import { Day } from './models/day.model';
import { Event, createNewEvent } from './models/event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  month: Month = new Month();
  createEventDialogVisibleAttribute: boolean = false;
  eventToCreate: Event = createNewEvent();

  incrementMonth(delta: number) {
    this.month = this.month.incrementMonth(delta);
  }

  setToday() {
    this.month = this.month.toToday();
  }

  createEvent(day: Day) {
    this.createEventDialogVisibleAttribute = true;
    this.eventToCreate = createNewEvent(day);
  }

  validateCreateEvent(event) {
    this.hideCreateEventDialog();
    console.log(event);
  }

  cancelCreateEvent() {
    this.hideCreateEventDialog();
  }

  private hideCreateEventDialog() {
    this.createEventDialogVisibleAttribute = false;
  }
}
