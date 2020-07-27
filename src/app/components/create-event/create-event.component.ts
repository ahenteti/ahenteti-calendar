import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-create-event',
  templateUrl: 'create-event.component.html',
  styleUrls: ['create-event.component.scss'],
})
export class CreateEventComponent {
  @Input()
  event: Event;

  @Output('validateCreateEvent')
  private _validateCreateEvent = new EventEmitter<Event>();

  @Output('cancelCreateEvent')
  private _cancelCreateEvent = new EventEmitter<void>();

  validateCreateEvent() {
    this._validateCreateEvent.emit(this.event);
  }

  cancelCreateEvent() {
    this._cancelCreateEvent.emit();
  }
}
