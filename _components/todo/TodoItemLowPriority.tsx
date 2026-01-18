"use client";

import type { Todo } from "@/_types/todo";

interface TodoItemLowPriorityProps {
    todos: Todo[];
    onComplete: (id: string) => void;
}

export function TodoItemLowPriority({ todos, onComplete }: TodoItemLowPriorityProps) {
    if (todos.length === 0) return null;

    return (
        <section className="mt-3">
            {/* Clean task list */}
            <div className="space-y-2">
                {todos.map((t) => {
                    const isCompleted = t.completed || t.status === "completed";
                    const createdDate = new Date(t.createdAt);
                    const createdLabel = createdDate.toLocaleDateString("ru-RU", {
                        day: "2-digit",
                        month: "short",
                    });

                    return (
                        <div
                            key={t.id}
                            className={[
                                "group flex items-center gap-3 px-4 py-3 rounded-xl",
                                "border transition-all duration-200",
                                isCompleted
                                    ? "border-slate-200 bg-slate-50/50"
                                    : "border-emerald-200 bg-white hover:border-emerald-300 hover:shadow-sm",
                            ].join(" ")}
                        >
                            {/* Simple checkbox */}
                            <button
                                type="button"
                                onClick={() => onComplete(t.id)}
                                className={[
                                    "h-5 w-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center shrink-0",
                                    isCompleted
                                        ? "bg-emerald-500 border-emerald-500"
                                        : "border-slate-300 hover:border-emerald-400",
                                ].join(" ")}
                            >
                                {isCompleted && (
                                    <span className="material-symbols-outlined text-white text-[14px]">
                                        check
                                    </span>
                                )}
                            </button>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <p className={[
                                    "text-sm font-medium transition-colors",
                                    isCompleted
                                        ? "text-slate-400 line-through"
                                        : "text-slate-900",
                                ].join(" ")}>
                                    {t.title}
                                </p>
                                <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                                    <span>{createdLabel}</span>
                                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                                    <span className={isCompleted ? "text-slate-400" : "text-emerald-600"}>
                                        Low
                                    </span>
                                </div>
                            </div>

                            {/* Minimal indicator */}
                            {!isCompleted && (
                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}