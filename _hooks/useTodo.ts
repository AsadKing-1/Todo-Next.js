"use client";

import { useEffect, useState } from "react";
import type { Todo } from "@/_types/todo";

const KEY = "todos";

export function useTodos() {
  const [taskStorage, setTaskStorage] = useState<Todo[]>([]);

  const totalTaskLength = taskStorage.length;
  const completedLength = taskStorage.filter((t) => t.completed).length;
  const progressTask =
    totalTaskLength === 0
      ? 0
      : Math.round((completedLength / totalTaskLength) * 100);

  const HighPriorityTasks = taskStorage.filter((t) => t.priority === "high");
  const LowPriorityTasks = taskStorage.filter((t) => t.priority === "low");
  const MediumPriorityTasks = taskStorage.filter(
    (t) => t.priority === "medium"
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

  function addTodo(title: string) {
    setTaskStorage((prev) => [
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
        status: "active",
        priority: "medium",
        createdAt: Date.now(),
      },
      ...prev,
    ]);
  }

  return {
    taskStorage,
    addTodo,
    completedLength,
    progressTask,
    totalTaskLength,
    HighPriorityTasks,
    LowPriorityTasks,
    MediumPriorityTasks,
  };
}
