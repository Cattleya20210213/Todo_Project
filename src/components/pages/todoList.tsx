import Header from "../uiParts/header";
import { todoListAtom } from "../../jotai/todoListAtom";
import "./TodoList.css";
import { List } from "@mui/material";
import { useAtom } from "jotai";
import TodoListItem from "../Organisms/todoListItem";

const TodoList = () => {
  const [todoList] = useAtom(todoListAtom);
  return (
    <>
      <Header></Header>
      <List>
        {todoList.map((todoItem) => (
          <TodoListItem
            index={todoItem.index}
            title={todoItem.title}
            due={todoItem.due}
          ></TodoListItem>
        ))}
      </List>
    </>
  );
};

export default TodoList;
