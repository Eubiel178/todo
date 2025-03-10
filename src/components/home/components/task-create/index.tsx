"use client";

import { useState } from "react";

import { Form } from "@/components";
import { createTask } from "@/utils";

export function TaskCreateForm() {
  const [formData, setFormData] = useState({ title: "" });

  async function handleSubmit() {
    if (!formData.title) {
      return alert("Preencha o campo de tarefa");
    }

    try {
      createTask(formData);

      setFormData({ title: "" });
    } catch (error) {
      console.error(error);
      alert("Erro ao adicionar a tarefa");
    }
  }

  return (
    <div>
      <h2>Nova Tarefa</h2>

      <Form handleSuccess={handleSubmit} buttonText="Adicionar">
        <input
          type="text"
          value={formData.title}
          onChange={(event) =>
            setFormData({ ...formData, title: event.target.value })
          }
          placeholder="Digite a tarefa..."
        />
      </Form>
    </div>
  );
}
