import { Day, EDay } from './day.model';

export const MONTH_ROWS = 6;
const WEEK_DAYS = 7;

export class Month {
  public year: number;
  public month: number;
  public firstDay: Date;
  public days: Map<number, Day[]> = new Map();

  public constructor(options?: MonthOptions) {
    const mergedOptions = { ...DefaultMonthOptions, ...options };
    this.year = mergedOptions.year;
    this.month = mergedOptions.month;
    this.firstDay = new Date(this.year, this.month, 1);
    let date = new Date(this.year, this.month, 1);
    date.setDate(date.getDate() - date.getDay() + mergedOptions.firstDay);
    for (let i = 0; i < mergedOptions.monthRows; i++) {
      let days: Day[] = [];
      for (let i = 0; i < WEEK_DAYS; i++) {
        days.push(new Day(date, this.firstDay.getMonth()));
        date.setDate(date.getDate() + 1);
      }
      this.days.set(i, days);
    }
  }

  incrementMonth(delta: number): Month {
    return new Month({ year: this.year, month: this.month + delta });
  }

  toToday(): Month {
    return new Month({ year: new Date().getFullYear(), month: new Date().getMonth() });
  }

  isCurrentMonth(): boolean {
    const today = new Date();
    return this.year === today.getFullYear() && this.month === today.getMonth();
  }
}

export interface MonthOptions {
  year?: number;
  month?: number;
  firstDay?: EDay;
  monthRows?: number;
}

const DefaultMonthOptions: MonthOptions = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  firstDay: EDay.Mon,
  monthRows: MONTH_ROWS,
};
