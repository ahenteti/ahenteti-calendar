import { Component } from '@angular/core';
import { Month } from './models/month.model';
import { Day } from './models/day.model';
import { Event, createNewEvent } from './models/event.model';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  month: Month = new Month();
  createEventDialogVisibleAttribute: boolean = false;
  updateEventDialogVisibleAttribute: boolean = false;
  eventToCreate: Event = createNewEvent();
  eventToUpdate: Event = createNewEvent();

  constructor(private storageService: StorageService) {}

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

  updateEvent(event: Event) {
    this.updateEventDialogVisibleAttribute = true;
    this.eventToUpdate = event;
  }

  validateCreateEvent(event) {
    this.hideCreateEventDialog();
    this.storageService.addEvent(event);
    this.month = this.month.clone();
  }

  cancelCreateEvent() {
    this.hideCreateEventDialog();
  }

  validateUpdateEvent(event) {
    this.hideUpdateEventDialog();
    this.storageService.updateEvent(event);
    this.month = this.month.clone();
  }

  cancelUpdateEvent() {
    this.hideUpdateEventDialog();
  }

  deleteEvent(event) {
    console.log(event);
    this.hideUpdateEventDialog();
    this.storageService.deleteEvent(event);
    this.month = this.month.clone();
  }

  private hideCreateEventDialog() {
    this.createEventDialogVisibleAttribute = false;
  }

  private hideUpdateEventDialog() {
    this.updateEventDialogVisibleAttribute = false;
  }
}
