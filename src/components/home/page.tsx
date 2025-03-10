import { TaskList, TaskCreateForm } from "./components";

export function Home() {
  return (
    <>
      <TaskCreateForm />
      <TaskList />
    </>
  );
}
