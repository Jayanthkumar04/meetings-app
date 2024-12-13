interface IAttendees {
  userId: string;
  email: string;
}
interface ICalender {
  name: string;
  attendees: IAttendees[];
}

export type { IAttendees, ICalender };
