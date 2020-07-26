import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MonthDayComponent } from './components/month-day/month-day.component';
import { MonthComponent } from './components/month/month.component';
import { MonthHeaderComponent } from './components/month-header/month-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MonthDayComponent, MonthComponent, MonthHeaderComponent],
  providers: [],
  exports: [MonthComponent],
})
export class MonthModule {}
