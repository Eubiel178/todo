"use server";

import { ITask } from "@/lib";
import { api } from "../api";
import { revalidatePath } from "next/cache";

export async function createTask(task: ITask) {
  await api({
    method: "POST",
    url: "/api/tasks",
    body: task,
  });

  await revalidatePath("/");
}

export async function updateTask(task: ITask) {
  await api({
    method: "PUT",
    url: "/api/tasks",
    body: task,
  });

  await revalidatePath("/");
}

export async function loadAllTask() {
  const response = await api({
    url: "/api/tasks",
    method: "GET",
  });

  return response;
}

export async function removeTask(task: ITask) {
  await api({
    method: "DELETE",
    url: "/api/tasks",
    body: task,
  });

  await revalidatePath("/");
}
