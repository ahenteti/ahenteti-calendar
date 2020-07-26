import { MonthDay, EDay } from './month-day.model';

export const MONTH_DAYS_NUMBER = 42;

export class Month {
  public year: number;
  public month: number;
  public days: MonthDay[] = [];

  public constructor(options?: MonthOptions) {
    const _options = { ...DefaultMonthOptions, ...options };
    this.year = _options.year;
    this.month = _options.month;
    let date = new Date(this.year, this.month, 1);
    date.setDate(date.getDate() - date.getDay() + _options.firstDay);
    for (let i = 0; i < _options.daysNumber; i++) {
      this.days.push(new MonthDay(date, this.month));
      date.setDate(date.getDate() + 1);
    }
  }
}

export interface MonthOptions {
  year?: number;
  month?: number;
  firstDay?: EDay;
  daysNumber?: number;
}

const DefaultMonthOptions: MonthOptions = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  firstDay: EDay.Mon,
  daysNumber: MONTH_DAYS_NUMBER,
};
