import type { Todo } from "@/_types/todo";

interface TodoItemMediumPriorityProps {
    todos: Todo[]
}
export function TodoItemMediumPriority({ todos }: TodoItemMediumPriorityProps) {
    return (
        <div className="p-2">
            Todo item with Medium Priority
        </div>
    )
}