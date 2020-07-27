import { Component, Input, ElementRef, AfterViewChecked, HostListener, Output, EventEmitter } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Day } from '../../models/day.model';

@Component({
  selector: 'app-day',
  templateUrl: 'day.component.html',
  styleUrls: ['day.component.scss'],
})
export class DayComponent implements AfterViewChecked {
  @Input()
  day: Day;

  @Output('createEvent')
  private _createEvent = new EventEmitter<Day>();

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

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
}
