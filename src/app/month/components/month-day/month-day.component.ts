import { Component, Input, ElementRef, AfterViewChecked, HostListener } from '@angular/core';
import { MonthDay } from '../../models/month-day.model';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-month-day',
  templateUrl: 'month-day.component.html',
  styleUrls: ['month-day.component.scss'],
})
export class MonthDayComponent implements AfterViewChecked {
  @Input()
  day: MonthDay;

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
}
