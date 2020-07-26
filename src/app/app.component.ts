import { Component, OnInit } from '@angular/core';
import { Month } from './models/month.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  month: Month = new Month();
  ngOnInit(): void {}
}
