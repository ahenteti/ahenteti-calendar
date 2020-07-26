import { Component, OnInit } from '@angular/core';
import { Month } from './month.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(new Month());
  }
}
