import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-update-event',
  templateUrl: 'update-event.component.html',
  styleUrls: ['update-event.component.scss'],
})
export class UpdateEventComponent {
  @Input()
  event: Event;

  @Output('validateUpdateEvent')
  private _validateUpdateEvent = new EventEmitter<Event>();

  @Output('cancelUpdateEvent')
  private _cancelUpdateEvent = new EventEmitter<void>();

  @Output('deleteEvent')
  private _deleteEvent = new EventEmitter<Event>();

  validateUpdateEvent() {
    this._validateUpdateEvent.emit(this.event);
  }

  cancelUpdateEvent() {
    this._cancelUpdateEvent.emit();
  }

  deleteEvent() {
    this._deleteEvent.emit(this.event);
  }
}
