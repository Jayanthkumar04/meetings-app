interface ITime {
  hours: number;
  minutes: number;
}

interface Users {
  // userId: string;
  email: string;
}
interface IMeetings {
  startTime: ITime;
  endTime: ITime;
  _id: string;
  name: string;
  description: string;
  date: Date;
  attendees: Users[];
}

export type { IMeetings, Users, ITime };
