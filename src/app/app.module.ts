import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonthModule } from './month/month.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MonthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
