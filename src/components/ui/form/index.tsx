"use client";

import { useState } from "react";

interface IFormProps {
  children: React.ReactNode;
  buttonText?: string;
  handleSuccess: () => Promise<void>;
}

export function Form({ children, handleSuccess, buttonText }: IFormProps) {
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (loading) return;

    try {
      setLoading(true);

      await handleSuccess();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div>{children}</div>

      <button disabled={loading} type="submit">
        {loading ? "Carregando..." : buttonText}
      </button>
    </form>
  );
}
