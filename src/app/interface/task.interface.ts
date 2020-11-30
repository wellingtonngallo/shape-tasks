export interface ITask {
  id?: number | string | undefined;
  board_id?: number;
  createdDate?: Date;
  description: string;
  name: string;
}
