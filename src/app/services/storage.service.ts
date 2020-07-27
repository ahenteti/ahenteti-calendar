import { Injectable } from '@angular/core';
import { Day } from '../models/day.model';
import { Event } from '../models/event.model';

const LOCAL_STORAGE_EVENTS_KEY_PREFIX = 'LOCAL_STORAGE_EVENTS_KEY_';
const LOCAL_STORAGE_DATE_FORMAT = 'YYYY_MM_DD';

@Injectable({ providedIn: 'root' })
export class StorageService {
  constructor() {}

  loadEvents(date: Day): Event[] {
    return JSON.parse(localStorage.getItem(this.getLocalStorageKey(date)) || '[]');
  }

  addEvent(event: Event) {
    const events = this.loadEvents(event.date);
    events.push(event);
    localStorage.setItem(this.getLocalStorageKey(event.date), JSON.stringify(events));
  }

  private getLocalStorageKey(date: Day) {
    return LOCAL_STORAGE_EVENTS_KEY_PREFIX + date.format(LOCAL_STORAGE_DATE_FORMAT);
  }
}
