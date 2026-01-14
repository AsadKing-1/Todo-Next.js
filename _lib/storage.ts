import type { Todo } from "@/_types/todo";

const KEY = "todos";

export function LoadFromLocalStorage(): Todo[] {
    if(typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem(KEY) || "[]")
}
export function SaveToLocalStorage(task: Todo[]){
    localStorage.setItem(KEY, JSON.stringify(task))
}
