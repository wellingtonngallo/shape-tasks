export interface IBoard {
  _id?: string;
  name: string;
  description: string;
  sprint: string;
  createdDate?: Date;
  tasks: [];
}
