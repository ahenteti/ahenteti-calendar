import { Component } from '@angular/core';
import { Month } from './models/month.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  month: Month = new Month();

  incrementMonth(delta: number) {
    this.month = this.month.incrementMonth(delta);
  }

  setToday() {
    this.month = this.month.toToday();
  }
}
