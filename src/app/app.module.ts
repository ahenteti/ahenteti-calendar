import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonthComponent } from './components/month/month.component';
import { DayComponent } from './components/day/day.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, MonthComponent, DayComponent, HeaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
