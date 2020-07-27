import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonthComponent } from './components/month/month.component';
import { DayComponent } from './components/day/day.component';
import { HeaderComponent } from './components/header/header.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { UpdateEventComponent } from './components/update-event/update-event.component';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [AppComponent, MonthComponent, DayComponent, HeaderComponent, IconButtonComponent, CreateEventComponent, UpdateEventComponent],
  imports: [BrowserModule, BrowserAnimationsModule, DialogModule, FormsModule, CalendarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
