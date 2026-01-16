import type { Todo } from "@/_types/todo";

interface TodoItemLowPriorityProps {
    todos: Todo[]
}
export function TodoItemLowPriority({ todos }: TodoItemLowPriorityProps) {
    return (
        <div className="p-2">
            Todo item with Low Priority
        </div>
    )
}