import { atom } from "jotai";
import { atomWithStorage, splitAtom } from "jotai/utils";
import { TodoItemInfo } from "./type/todoItemInfo";


export const initTodoListItem:TodoItemInfo = {
  title:'',
  due:'',
  isFinish:false,
  isDelete:false,
  isError:false,
  oldTitle:'',
}

export const isAddable = atom(false);
export const isDeleted = atom(false);
export const todoListAtom = atomWithStorage<TodoItemInfo[]>('todo_list',[]);
export const todoItemAtomsAtom = splitAtom(todoListAtom);
export const todoItemToAddAtom = atom(initTodoListItem);

export type AtomSetter<T> = (arg_0:T) => void;
