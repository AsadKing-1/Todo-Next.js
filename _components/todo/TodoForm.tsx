"use client";
import { useState } from "react";
export type Priority = "low" | "medium" | "high";
import { PrioritySwitch } from "../switcher/PrioritySwitch";
import { useTodos } from "@/_hooks/useTodo";


export function TodoFormTask() {
    const { addTodo, setOpenModal } = useTodos();

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

        setOpenModal(false);
    }

    function handleCancel() {
        setOpenModal(false);
    }

    return (
        <div className="bg-white rounded-md p-1">
            <h1 className="text-[#111418] tracking-tight text-2xl font-bold leading-tight">New Task</h1>
            <div className="mt-3 w-full">
                <input value={titleTask} onChange={(e) => setTitleTask(e.target.value)} className="bg-background w-full text-[16px] border-none p-2.5 rounded-xl placeholder:text-gray-400 placeholder:text-[16px] text-[#111418]" placeholder="Task Title" type="text" />
            </div>
            <div className="mt-3">
                <p className="uppercase ml-1">Description</p>
                <textarea value={descTask} onChange={(e) => { setDescTask(e.target.value) }} className="form-input bg-background mt-1 flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-1 focus:ring-primary/30 border border-gray-100 min-h-30 placeholder:text-gray-400 p-4 text-base font-normal leading-normal" placeholder="Add more details about this task..."></textarea>
            </div>
            <div className="mt-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9.5 w-9.5 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-[20px]">
                                calendar_today
                            </span>
                        </div>
                        <p className="text-md font-medium text-gray-700">Date</p>
                    </div>
                </div>
                <div className="mt-2">
                    <input value={dateTask} onChange={(e) => setDateTask(e.target.value)} className="bg-background w-full p-3 rounded-2xl" type="date" />
                </div>
            </div>
            <div className="mt-3">
                <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:text-orange-400">
                        <span className="material-symbols-outlined">priority_high</span>
                    </div>
                    <div>
                        <span className="text-md font-medium text-gray-700">Priority</span>
                    </div>
                </div>
                <div>
                    <PrioritySwitch value={priority} setValue={setPriority} />
                </div>
            </div>
            <div className="flex justify-between gap-2 items-center mt-3">
                <button onClick={() => handleCancel()} className="w-full bg-background rounded-xl p-2">Cancel</button>
                <button onClick={() => handleCreateTask()} className="w-full bg-primary text-white rounded-xl p-2">Create Task</button>
            </div>
        </div >
    )
}