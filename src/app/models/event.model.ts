export interface Event {
  summary: string;
  details: string;
  createdAt: Date;
  date: Date;
}

export const createNewEvent = (date: Date = new Date()): Event => {
  return {
    summary: '',
    details: '',
    createdAt: new Date(),
    date,
  };
};
