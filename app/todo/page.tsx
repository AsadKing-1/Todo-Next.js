"use client"
import { TodayDate } from "@/_components/date/Date";
import { TodoList } from "@/_components/todo/TodoList";
import { TaskToday } from "@/_components/tasktoday/TaskToday";
import { useTodos } from "@/_hooks/useTodo";
import { AddTaskButton } from "@/_components/ui/Button";


import { TodoFormTask } from "@/_components/todo/TodoForm";
import { Modal } from "@/_components/todo/ModalFormTask";

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
                onComplete={todos.completeTodo}
            />
            <Modal
                isOpen={todos.isOpenModal}
                onClose={todos.setOpenModal}>
                <TodoFormTask 
                    addTodo={todos.addTodo}
                    closeModal={todos.setOpenModal}
                />
            </Modal>
            <AddTaskButton openModal={todos.setOpenModal}/>
        </div>
    )
}
