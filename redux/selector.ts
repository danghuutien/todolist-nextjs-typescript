import { RootState } from "./store";
export const todoListSelector = (state: RootState) => state.todoList.todoState;
export const todoTitle = (state: RootState) => state.todoList.title;
export const awaitCheck = (state: RootState) => state.todoList.disable;