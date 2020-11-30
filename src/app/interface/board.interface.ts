import { ITask } from './task.interface';

export interface IBoard {
  id?: any;
  name: string;
  description: string;
  sprint: string;
  createdDate?: Date;
  tasks: ITask[];
}
