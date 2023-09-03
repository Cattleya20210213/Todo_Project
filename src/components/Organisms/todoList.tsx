import { List, SxProps } from "@mui/material";
import {
  isAddable,
  isDeleted,
  todoItemAtomsAtom,
  todoItemToAddAtom,
  todoListAtom,
} from "../../jotai/atoms";
import { useAtom } from "jotai";
import { useEffect } from "react";
import TodoListItem from "./todoListItem";

const listItemStyle: SxProps = {
  display: "flex",
  columnGap: "16px",
  color: "black",
  backgroundColor: "white",
  width: "720px",
};

const TodoList = () => {
  const [todoItemAtoms] = useAtom(todoItemAtomsAtom);
  const [, setTodoList] = useAtom(todoListAtom);
  const [todoItemToAdd] = useAtom(todoItemToAddAtom);
  const [isAddTodoItem, setIsAddTodoItem] = useAtom(isAddable);
  const [isDeleteTodoItem, setIsDeleteTodoItem] = useAtom(isDeleted);

  useEffect(() => {
    if (isAddTodoItem) {
      setTodoList((oldValue) => [...oldValue, todoItemToAdd]);
      setIsAddTodoItem(false);
    } else if (isDeleteTodoItem) {
      setTodoList((oldValue) =>
        oldValue.filter((todoItem) => !todoItem.isDelete)
      );
      setIsDeleteTodoItem(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAddTodoItem, isDeleteTodoItem]);

  return (
    <>
      <List>
        <TodoListItem
          listItemSx={listItemStyle}
          todoItemAtom={todoItemToAddAtom}
          type="add_item"
          todoListAtom={todoListAtom}
        />
      </List>
      <List>
        {todoItemAtoms.map((todoItemAtom) => (
          <TodoListItem
            type="list_item"
            listItemSx={listItemStyle}
            todoItemAtom={todoItemAtom}
          ></TodoListItem>
        ))}
      </List>
    </>
  );
};

export default TodoList;
