interface IAttendees {
  userId: string;
  email: string;
}
interface ICalender {
  name: string;
  date: Date;
  description: string;
  startTime: string;
  endTime: string;
  attendees: IAttendees[];
}

export type { IAttendees, ICalender };
