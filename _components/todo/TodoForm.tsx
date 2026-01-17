import { useState } from "react";

export function TodoFormTask() {
    return (
        <div className="bg-white rounded-md p-1">
            <h1 className="text-[#111418] tracking-tight text-2xl font-bold leading-tight">New Task</h1>
            <div className="mt-2 w-full">
                <input className="bg-background w-full text-[16px] font-semibold border-none p-2.5 rounded-xl placeholder:text-gray-400 placeholder:text-[16px] text-[#111418] transition-all duration-300 focus:scale-[1.02]" placeholder="Task Title" type="text" />
            </div>
            <div className="mt-3">
                <p className="uppercase ml-1">Description</p>
                <textarea className="form-input bg-background mt-1 flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-1 focus:ring-primary/30 border border-gray-100 min-h-30 placeholder:text-gray-400 p-4 text-base font-normal leading-normal" placeholder="Add more details about this task..."></textarea>
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
            </div>
        </div>
    )
}