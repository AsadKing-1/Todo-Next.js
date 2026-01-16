import type { Todo } from "@/_types/todo";

interface TodoItemHighPriorityProps {
    todos: Todo[]
}
export function TodoItemHighPriority({ todos }: TodoItemHighPriorityProps) {
    return (
        <div className="p-2">
            Todo item with High Priority
        </div>
    )
}