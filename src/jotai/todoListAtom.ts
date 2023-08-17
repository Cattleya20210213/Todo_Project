import { atom } from "jotai";
import { atomWithStorage, splitAtom } from "jotai/utils";

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

export const todoItemsAtom = atomWithStorage<TodoListItem[]>('todo_list',[]);
export const todoItemAtomsAtom = splitAtom(todoItemsAtom);
export const todoItemToAddAtom = atom(initTodoListItem);
