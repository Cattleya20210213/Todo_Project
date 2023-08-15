import { atom } from "jotai";
import { splitAtom } from "jotai/utils";

export type TodoListItem = {
  title: string;
  due: string;
  isFinish: boolean;
  isDelete: boolean;
  isError: boolean;
  oldTitle: string;
};

export const initTodoListItem:TodoListItem = {
  title:'',
  due:'',
  isFinish:false,
  isDelete:false,
  isError:false,
  oldTitle:'',
}

export const todoItemsAtom = atom<TodoListItem[]>([]);
export const todoItemAtomsAtom = splitAtom(todoItemsAtom);
export const todoItemToAddAtom = atom(initTodoListItem);
