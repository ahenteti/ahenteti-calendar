import { MonthDay, EDay } from './month-day.model';

export const MONTH_ROWS = 6;
const WEEK_DAYS = 7;

export class Month {
  public year: number;
  public month: number;
  public days: Map<number, MonthDay[]> = new Map();

  public constructor(options?: MonthOptions) {
    const mergedOptions = { ...DefaultMonthOptions, ...options };
    this.year = mergedOptions.year;
    this.month = mergedOptions.month;
    let date = new Date(this.year, this.month, 1);
    date.setDate(date.getDate() - date.getDay() + mergedOptions.firstDay);
    for (let i = 0; i < mergedOptions.monthRows; i++) {
      let days: MonthDay[] = [];
      for (let i = 0; i < WEEK_DAYS; i++) {
        days.push(new MonthDay(date, this.month));
        date.setDate(date.getDate() + 1);
      }
      this.days.set(i, days);
    }
  }
}

export interface MonthOptions {
  year?: number;
  month?: number;
  firstDay?: EDay;
  monthRows: number;
}

const DefaultMonthOptions: MonthOptions = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  firstDay: EDay.Mon,
  monthRows: MONTH_ROWS,
};
