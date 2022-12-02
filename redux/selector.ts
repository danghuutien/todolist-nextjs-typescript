import { RootState } from "./store";
export const todoListSelector = (state: RootState) => state.todoList.todoState;
export const todoTitleSelector = (state: RootState) => state.todoList.title;
export const isAddSelector = (state: RootState) => state.todoList.isAdd;
export const objUpdateSelector = (state: RootState) => state.todoList.objUpdate;