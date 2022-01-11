import { TodoTypeCustom } from "./todo-type-custom";

export class TodoCustom {
  id: number;
  name: string;
  dueDate: Date;
  state: Boolean;
  types: TodoTypeCustom[];
}
