import { atom } from "jotai";
import { splitAtom } from "jotai/utils";

export type TodoListItemsAtom = {
  title: string;
  due: string;
  isFineshed: boolean;
}[];

const testItems:TodoListItemsAtom = [{
  title:'test1',
  due: '2023-01-01',
  isFineshed:false,
},{
  title:'test2',
  due: '',
  isFineshed:false,
}]


const todoItemsAtom = atom(testItems);
export const todoItemAtomsAtom = splitAtom(todoItemsAtom);
