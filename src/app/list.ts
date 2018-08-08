import { Person } from './person';

export interface List {
  pageTitleH1: string;
  pageTitleH2: string;
  description: string;
  referenceLink: string;
  celebrityList: Array<Person>;
  usDollarValue: number;
  australianDollarValue: number;
  euroValue: number;
}
