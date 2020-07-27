import { Day } from './day.model';

export interface Event {
  summary: string;
  details: string;
  createdAt: Date;
  date: Day;
}

export const createNewEvent = (date: Day = new Day(new Date())): Event => {
  return {
    summary: '',
    details: '',
    createdAt: new Date(),
    date,
  };
};
