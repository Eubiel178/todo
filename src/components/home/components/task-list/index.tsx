import { ITask } from "@/lib";
import { loadAllTask } from "@/utils";

import { TaskItem } from "./task-item";

export async function TaskList() {
  const tasks: ITask[] = (await loadAllTask()) || [];

  return (
    <div>
      <h2>Lista de Tarefas</h2>

      {tasks && tasks?.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <TaskItem {...task} key={task?.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
