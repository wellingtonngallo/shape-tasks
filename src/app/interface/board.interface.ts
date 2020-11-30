import { ITask } from './task.interface';

export interface IBoard {
  // tslint:disable-next-line: no-any
  id?: any;
  name: string;
  description: string;
  sprint?: string;
  createdDate?: Date;
  tasks?: ITask[];
}
