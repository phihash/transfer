export type Task = {
  name: string;
  id: number;
  isDone: boolean;
};

//  isDone は「タスクが完了した」というビジネスの事実なのでモデルでOK。
