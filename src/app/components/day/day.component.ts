import { Component, Input, ElementRef, AfterViewChecked, HostListener, Output, EventEmitter, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Day } from '../../models/day.model';
import { StorageService } from 'src/app/services/storage.service';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-day',
  templateUrl: 'day.component.html',
  styleUrls: ['day.component.scss'],
})
export class DayComponent implements AfterViewChecked, OnInit {
  @Input()
  day: Day;
  @Output('createEvent')
  private _createEvent = new EventEmitter<Day>();
  @Output('updateEvent')
  private _updateEvent = new EventEmitter<Event>();
  events: Event[];

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private storageService: StorageService) {}

  ngOnInit(): void {
    this.events = this.storageService.loadEvents(this.day);
  }

  ngAfterViewChecked() {
    this.setElementHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setElementHeight();
  }

  private setElementHeight() {
    const height = this.elementRef.nativeElement.getBoundingClientRect().width;
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', height + 'px');
  }

  createEvent() {
    this._createEvent.emit(this.day);
  }

  updateEvent(event: Event) {
    this._updateEvent.emit(event);
  }
}
