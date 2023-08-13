import Header from "../uiParts/header";
import { todoItemAtomsAtom } from "../../jotai/todoListAtom";
import "./TodoList.css";
import { List } from "@mui/material";
import { useAtom } from "jotai";
import TodoListItem from "../Organisms/todoListItem";

const TodoList = () => {
  const [todoList] = useAtom(todoItemAtomsAtom);
  return (
    <>
      <Header></Header>
      <List>
        {todoList.map((todoItemAtom) => (
          <TodoListItem todoItemAtom={todoItemAtom}></TodoListItem>
        ))}
      </List>
    </>
  );
};

export default TodoList;
