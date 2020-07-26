import { Day } from './day.model';

export class Month {
  public year: number;
  public month: number;
  public days: Day[] = [];

  public constructor(year: number = new Date().getFullYear(), month: number = new Date().getMonth()) {
    this.year = year;
    this.month = month;
    let date = new Date(year, month, 1);
    while (date.getMonth() === month) {
      this.days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
  }
}
