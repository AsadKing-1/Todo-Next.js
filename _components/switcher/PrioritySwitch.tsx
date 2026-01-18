"use client";
import type { Priority } from "../todo/TodoForm";

interface SwitchProps {
    value: string,
    setValue: (val: Priority) => void
}

export function PrioritySwitch({ value, setValue }: SwitchProps) {
    return (
        <div className="inline-flex rounded-xl w-full bg-gray-100 p-0.5">
            {(["low", "medium", "high"] as Priority[]).map((p) => (
                <button
                    key={p}
                    onClick={() => setValue(p)}
                    className={`px-4 py-1.5 w-full text-sm rounded-lg transition-all ${value === p ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                >
                    {p[0].toUpperCase() + p.slice(1)}
                </button>
            ))}
        </div>
    );
}
