export type Task = {
  name: string;
  id: number;
  isDone: boolean;
};

export type Phase = {
  tasks: Task[];
  title: string;
  id: number;
};

//  isDone は「タスクが完了した」というビジネスの事実なのでモデルでOK。
