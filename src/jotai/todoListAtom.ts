import { atom } from "jotai";
import { splitAtom } from "jotai/utils";

export type TodoListItem = {
  title: string;
  due: string;
  isFinished: boolean;
};

const initTodoListItem:TodoListItem = {
  title:'',
  due:'',
  isFinished:false,
}

const testItems:TodoListItem[] = [{
  title:'test1',
  due: '2023-01-01',
  isFinished:false,

},{
  title:'test2',
  due: '',
  isFinished:false,
}]


const todoItemsAtom = atom(testItems);
export const todoItemAtomsAtom = splitAtom(todoItemsAtom);
export const todoItemToAddAtom = atom(initTodoListItem);
