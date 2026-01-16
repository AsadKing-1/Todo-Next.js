import { Todo } from "@/_types/todo";
import { TodoItemHighPriority } from "./TodoItemHighPriority";
import { TodoItemMediumPriority } from "./TodoItemMediumPriority";
import { TodoItemLowPriority } from "./TodoItemLowPriority";

interface TodoListProps {
    HighTask: Todo[],
    MediumTask: Todo[],
    LowTask: Todo[],
}

export function TodoList({ HighTask, MediumTask, LowTask }: TodoListProps) {
    return (
        <div className="mt-5">
            <div>
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-red-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">priority_high</span>
                        High Priority
                    </h3>
                </div>
                <div>
                    <TodoItemHighPriority todos={HighTask} />
                </div>
            </div>
            <div>
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">segment</span>
                        Medium Priority
                    </h3>
                </div>
                <div>
                    <TodoItemMediumPriority todos={MediumTask} />
                </div>
            </div>
            <div>
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">low_priority</span>
                        Low Priority
                    </h3>
                </div>
                <div>
                    <TodoItemLowPriority todos={LowTask} />
                </div>
            </div>
        </div>
    )
}