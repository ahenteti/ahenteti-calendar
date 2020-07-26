export enum EDay {
  Sun = 0,
  Mon = 1,
  Tue = 2,
  Wed = 3,
  Thu = 4,
  Fri = 5,
  Sat = 6,
}

export class MonthDay extends Date {
  public constructor(date: Date, private displayedMonth: number) {
    super(date);
    this.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
  }

  public isNotAmongDisplayedMonthDays(): boolean {
    return this.getMonth() !== this.displayedMonth;
  }
}
