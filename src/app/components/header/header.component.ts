import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Month } from 'src/app/models/month.model';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent {
  @Input()
  month: Month;

  @Output('incrementMonth')
  private _incrementMonth = new EventEmitter<number>();

  incrementMonth(delta: number) {
    this._incrementMonth.emit(delta);
  }
}
