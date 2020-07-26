import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MonthDayComponent } from './components/month-day/month-day.component';
import { MonthComponent } from './components/month/month.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MonthDayComponent, MonthComponent],
  providers: [],
  exports: [MonthComponent],
})
export class MonthModule {}
