import { Component, Input } from '@angular/core';
import { Month } from 'src/app/models/month.model';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent {
  @Input()
  month: Month;
}
