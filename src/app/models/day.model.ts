import * as moment from 'moment';

export enum EDay {
  Sun = 0,
  Mon = 1,
  Tue = 2,
  Wed = 3,
  Thu = 4,
  Fri = 5,
  Sat = 6,
}

export class Day extends Date {
  public constructor(date: Date, private displayedMonth: number = date.getMonth()) {
    super(date);
    this.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
  }

  public isNotAmongDisplayedMonthDays(): boolean {
    return this.getMonth() !== this.displayedMonth;
  }

  public isToday(): boolean {
    const today = new Date();
    return this.getFullYear() === today.getFullYear() && this.getMonth() === today.getMonth() && this.getDate() === today.getDate();
  }

  public format(format: string): string {
    return moment(this).format(format);
  }
}
