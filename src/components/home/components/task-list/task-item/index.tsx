"use client";

import { ITask } from "@/lib";
import { updateTask, removeTask } from "@/utils";

export function TaskItem(props: ITask) {
  return (
    <li key={props?.id}>
      <strong>{props?.title}</strong>
      <span> - {props?.completed ? "Concluída" : "Pendente"}</span>
      <button
        onClick={async () => {
          await updateTask({ ...props, completed: !props?.completed });
        }}
        type="button"
      >
        {props?.completed ? "Marcar como Pendente" : "Marcar como Concluída"}
      </button>

      <button onClick={async () => await removeTask(props)} type="button">
        Remover
      </button>
    </li>
  );
}
