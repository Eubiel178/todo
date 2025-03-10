import db from "./db";

export interface ITask {
  id?: string;
  title?: string;
  completed?: boolean;
}

export function getTasks() {
  return db.prepare("SELECT * FROM tasks").all();
}

export function getTask({ id }: { id: ITask["id"] }) {
  return db.prepare("SELECT * FROM tasks WHERE id = ?").get(id);
}

export function addTask(task: ITask) {
  return db
    .prepare("INSERT INTO tasks (title, completed) VALUES (?, ?)")
    .run(task?.title, task?.completed ? 1 : 0);
}

export function updateTask(task: ITask) {
  return db
    .prepare("UPDATE tasks SET title = ?, completed = ? WHERE id = ?")
    .run(task?.title, task?.completed ? 1 : 0, task?.id);
}

export function deleteTask({ id }: { id: ITask["id"] }) {
  return db.prepare("DELETE FROM tasks WHERE id = ?").run(id);
}
