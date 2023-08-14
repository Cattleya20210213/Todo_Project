import { atom } from "jotai";
import { splitAtom } from "jotai/utils";

export type TodoListItem = {
  title: string;
  due: string;
  isFinish: boolean;
  isDelete: boolean
};

export const initTodoListItem:TodoListItem = {
  title:'',
  due:'',
  isFinish:false,
  isDelete:false,
}

const testItems:TodoListItem[] = [{
  ...initTodoListItem,
  title:'test1',
  due: '2023-01-01',

},{
  ...initTodoListItem,
  title:'test2',
  due: '2023-01-01',
}]


export const todoItemsAtom = atom(testItems);
export const todoItemAtomsAtom = splitAtom(todoItemsAtom);
export const todoItemToAddAtom = atom(initTodoListItem);
