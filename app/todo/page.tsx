"use client"
import { TodayDate } from "@/_components/date/Date";
import { TodoList } from "@/_components/todo/TodoList";
import { TaskToday } from "@/_components/tasktoday/TaskToday";
import { useTodos } from "@/_hooks/useTodo"

export default function TodoPage() {
    const todos = useTodos();

    return (
        <div>
            <TodayDate />
            <TaskToday
                completed={todos.completedLength}
                progress={todos.progressTask}
                total={todos.totalTaskLength}
            />
            <TodoList
                LowTask={todos.LowPriorityTasks}
                MediumTask={todos.MediumPriorityTasks}
                HighTask={todos.HighPriorityTasks}
            />
        </div>
    )
}