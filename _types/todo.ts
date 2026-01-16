type TodoStatus = "active" | "completed" | "archived"

export type Todo = {
    id: string;
    title: string;
    completed: boolean;
    status: TodoStatus;
    priority: "high" | "medium" | "low"
    createdAt: number;
};
