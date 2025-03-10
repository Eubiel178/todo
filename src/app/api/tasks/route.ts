import { NextResponse } from "next/server";
import { addTask, deleteTask, getTasks, updateTask } from "@/lib";
import type { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  try {
    const tasks = getTasks();
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao obter as tarefas" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const response = await request.json();

    if (!response?.title) {
      return NextResponse.json(
        { error: "Título é obrigatório" },
        { status: 400 }
      );
    }

    addTask(response);

    return NextResponse.json({
      message: "Tarefa adicionada com sucesso",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao adicionar a tarefa" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const response = await request.json();

    if (!response?.id) {
      return NextResponse.json({ error: "ID é obrigatório" }, { status: 400 });
    }

    await updateTask(response);

    return NextResponse.json({
      message: "Tarefa atualizada com sucesso",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao atualizar a tarefa" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const response = await request.json();
    if (!response?.id) {
      return NextResponse.json({ error: "ID é obrigatório" }, { status: 400 });
    }

    deleteTask(response);

    return NextResponse.json({
      message: "Tarefa excluida com sucesso",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao excluir a tarefa" },
      { status: 500 }
    );
  }
}
