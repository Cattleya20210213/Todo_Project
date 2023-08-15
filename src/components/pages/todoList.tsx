import Header from "../uiParts/header";
import {
  todoItemToAddAtom,
  todoItemAtomsAtom,
  todoItemsAtom,
} from "../../jotai/todoListAtom";
import "./TodoList.css";
import { List } from "@mui/material";
import { useAtom } from "jotai";
import TodoListItem from "../Organisms/todoListItem";
import { useEffect } from "react";

const TodoList = () => {
  const [todoList] = useAtom(todoItemAtomsAtom);
  const [todoItems, setTodoItems] = useAtom(todoItemsAtom);
  useEffect(() => {
    setTodoItems((oldValue) => oldValue.filter((item) => !item.isDelete));
  }, [todoItems, setTodoItems]);

  return (
    <>
      <Header></Header>
      <TodoListItem todoItemAtom={todoItemToAddAtom} isAdd={true} />
      <List>
        {todoList.map((todoItemAtom) => (
          <TodoListItem todoItemAtom={todoItemAtom}></TodoListItem>
        ))}
      </List>
    </>
  );
};

export default TodoList;
