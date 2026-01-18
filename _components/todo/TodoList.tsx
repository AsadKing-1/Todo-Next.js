import { Todo } from "@/_types/todo";
import { TodoItemHighPriority } from "./TodoItemHighPriority";
import { TodoItemMediumPriority } from "./TodoItemMediumPriority";
import { TodoItemLowPriority } from "./TodoItemLowPriority";

import { HighPriorityEmptyState } from "./EmptyState/HighPriorityEmptyState";
import { MediumPriorityEmptyState } from "./EmptyState/MediumPriorityEmptyState";
import { LowPriorityEmptyState } from "./EmptyState/LowPriorityEmptyState";

interface TodoListProps {
    HighTask: Todo[],
    MediumTask: Todo[],
    LowTask: Todo[],
    onComplete: (id: string) => void;
}

export function TodoList({ HighTask, MediumTask, LowTask, onComplete }: TodoListProps) {
    return (
        <div className="">
            <div>
                <div className="mb-3 mt-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-red-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">priority_high</span>
                        High Priority
                    </h3>
                </div>
                <div>
                    {HighTask.length === 0 ? (
                        <HighPriorityEmptyState />
                    ) : (
                        <TodoItemHighPriority todos={HighTask} onComplete={onComplete} />
                    )}
                </div>
            </div>
            <div>
                <div className="mb-3 mt-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">segment</span>
                        Medium Priority
                    </h3>
                </div>
                <div>
                    {MediumTask.length === 0 ? (
                        <MediumPriorityEmptyState />
                    ) : (
                        <TodoItemMediumPriority todos={MediumTask} onComplete={onComplete} />
                    )}
                </div>
            </div>
            <div>
                <div className="mb-3 mt-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">low_priority</span>
                        Low Priority
                    </h3>
                </div>
                <div>
                    {LowTask.length === 0 ? (
                        <LowPriorityEmptyState />
                    ) : (
                        <TodoItemLowPriority todos={LowTask} onComplete={onComplete} />
                    )}
                </div>
            </div>
        </div>
    )
}
