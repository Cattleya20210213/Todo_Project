import { atom } from "jotai";

export type TodoListItem = {
  title: string;
  due: string;
  isFineshed: boolean;
  index: number;
};

const testItem:TodoListItem = {
  title:'test',
  due: '',
  isFineshed:false,
  index:0
}

export const todoListAtom = atom<TodoListItem[]>([testItem]);
