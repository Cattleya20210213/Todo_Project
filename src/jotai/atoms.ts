import { atom } from "jotai";
import { atomWithStorage, splitAtom } from "jotai/utils";
import { TodoItemInfo } from "./type/todoItemInfo";
import { SearchCriteliaTodo } from "./type/searchCriteriaTodo";

export const initTodoListItem:TodoItemInfo = {
  title:'',
  due:'',
  isFinish:false,
  isDelete:false,
  isError:false,
  oldTitle:'',
}

export const isAddTodoItemAtom = atom(false);
export const isDeleteTodoItemAtom = atom(false);
export const todoListAtom = atomWithStorage<TodoItemInfo[]>('todo_list',[]);
export const todoItemAtomsAtom = splitAtom(todoListAtom);
export const todoItemToAddAtom = atom(initTodoListItem);

export const initSearchCriteliaTodo:SearchCriteliaTodo = {
  isFinish:false,
  title:'',
  matchPatternTitle:'',
}

export const searchCriteliaAtom = atomWithStorage<SearchCriteliaTodo>('search_critelia', initSearchCriteliaTodo);

export type AtomSetter<T> = (arg_0:T) => void;
