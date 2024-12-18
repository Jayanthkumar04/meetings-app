import { Users } from './IMeetings';

interface ITeams {
  _id: string;
  name: string;
  shortName: string;
  description: string;
  members: Users[];
}

export type { ITeams };
