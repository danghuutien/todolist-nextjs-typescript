import { RootState } from "./store";
export const todoListSelector = (state: RootState) => state.todoList.todoState;