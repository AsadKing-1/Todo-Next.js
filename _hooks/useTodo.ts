"use client";

import { useEffect, useState } from "react";
import type { Todo } from "@/_types/todo";

import { AddTodoPayload } from "@/_types/todo";

const KEY = "todos";

export function useTodos() {
  const [taskStorage, setTaskStorage] = useState<Todo[]>([]);

  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const totalTaskLength = taskStorage.length;
  const completedLength = taskStorage.filter((t) => t.completed).length;
  const progressTask =
    totalTaskLength === 0
      ? 0
      : Math.round((completedLength / totalTaskLength) * 100);

  const HighPriorityTasks = taskStorage.filter(
    (t) => t.priority === "high" && !t.completed,
  );
  const LowPriorityTasks = taskStorage.filter(
    (t) => t.priority === "low" && !t.completed,
  );
  const MediumPriorityTasks = taskStorage.filter(
    (t) => t.priority === "medium" && !t.completed,
  );

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved) {
      setTaskStorage(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(taskStorage));
  }, [taskStorage]);

  function addTodo({ title, priority }: AddTodoPayload) {
    setTaskStorage((prev) => [
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
        status: "active",
        priority,
        createdAt: Date.now(),
      },
      ...prev,
    ]);
  }

  function completeTodo(id: string) {
    setTaskStorage((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: true,
              status: "completed",
            }
          : todo,
      ),
    );
  }

  return {
    isOpenModal,
    setOpenModal,
    taskStorage,
    addTodo,
    completeTodo,
    completedLength,
    progressTask,
    totalTaskLength,
    HighPriorityTasks,
    LowPriorityTasks,
    MediumPriorityTasks,
  };
}
