export class Day extends Date {
  private constructor() {
    super();
  }

  public static from(date: Date): Day {
    const res = new Day();
    const internalDate = new Date(date); // hack to fix "Javascript: getFullyear() is not a function" error! really I didn't understand why I obtained this error when accessing the getFullYear() method directly from date variable. if you know the reason behind this, please let me know :)
    res.setFullYear(internalDate.getFullYear(), internalDate.getMonth(), internalDate.getDate());
    return res;
  }
}
