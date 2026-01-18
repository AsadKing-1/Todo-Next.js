"use client";
import { useState } from "react";
export type Priority = "low" | "medium" | "high";
import { PrioritySwitch } from "../switcher/PrioritySwitch";
import { AddTodoPayload } from "@/_types/todo";

type TodoFormTaskProps = {
    addTodo: (payload: AddTodoPayload) => void;
    closeModal: (val: boolean) => void;
};
export function TodoFormTask({ addTodo, closeModal }: TodoFormTaskProps) {

    const [titleTask, setTitleTask] = useState<string>("");
    const [descTask, setDescTask] = useState<string>("");
    const [dateTask, setDateTask] = useState<string>("");
    const [priority, setPriority] = useState<Priority>("low");

    function handleCreateTask() {
        if (!titleTask.trim()) return;

        addTodo({
            title: titleTask,
            description: descTask,
            dueDate: dateTask,
            priority,
        });

        setTitleTask("");
        setDescTask("");
        setDateTask("");
        setPriority("low");

        closeModal(false);
    }

    function handleCancel() {
        closeModal(false);
    }

    return (
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-10 -bottom-10 h-28 w-28 rounded-full bg-emerald-200/30 blur-3xl" />

            <div className="flex items-center justify-between">
                <h1 className="text-[#111418] tracking-tight text-2xl font-bold leading-tight">New Task</h1>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                    Live
                </span>
            </div>

            <div className="mt-4 w-full">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Task title
                </label>
                <input
                    value={titleTask}
                    onChange={(e) => setTitleTask(e.target.value)}
                    className="w-full rounded-2xl border border-transparent bg-slate-100/80 p-3 text-[16px] text-[#111418] shadow-sm outline-none transition focus:border-primary/30 focus:bg-white focus:ring-4 focus:ring-primary/10"
                    placeholder="Task Title"
                    type="text"
                />
            </div>

            <div className="mt-4">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Description
                </label>
                <textarea
                    value={descTask}
                    onChange={(e) => { setDescTask(e.target.value) }}
                    className="min-h-28 w-full resize-none rounded-2xl border border-slate-100 bg-slate-100/80 p-4 text-base font-normal leading-normal text-[#111418] shadow-sm outline-none transition focus:border-primary/30 focus:bg-white focus:ring-4 focus:ring-primary/10"
                    placeholder="Add more details about this task..."
                />
            </div>

            <div className="mt-4 flex flex-col gap-4">
                <div>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-[20px]">
                                calendar_today
                            </span>
                        </div>
                        <p className="text-md font-medium text-gray-700">Date</p>
                    </div>
                    <div className="mt-2">
                        <input
                            value={dateTask}
                            onChange={(e) => setDateTask(e.target.value)}
                            className="w-full rounded-2xl border border-slate-100 bg-slate-100/80 p-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-primary/30 focus:bg-white focus:ring-4 focus:ring-primary/10"
                            type="date"
                        />
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:text-orange-400">
                            <span className="material-symbols-outlined">priority_high</span>
                        </div>
                        <span className="text-md font-medium text-gray-700">Priority</span>
                    </div>
                    <div className="rounded-2xl border border-transparent bg-slate-100/80 p-2 shadow-sm">
                        <PrioritySwitch value={priority} setValue={setPriority} />
                    </div>
                </div>
            </div>

            <div className="mt-2 flex items-center gap-3">
                <button
                    onClick={handleCancel}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md active:translate-y-0"
                >
                    Cancel
                </button>
                <button
                    onClick={handleCreateTask}
                    className="w-full rounded-2xl bg-primary px-4 py-2.5 text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:shadow-primary/35 active:translate-y-0"
                >
                    Create
                </button>
            </div>
        </div>
    )
}
