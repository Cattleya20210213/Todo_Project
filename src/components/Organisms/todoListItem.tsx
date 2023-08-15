import { Checkbox, IconButton, ListItem, TextField } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import DeleteIcon from "@mui/icons-material/delete";
import dayjs from "dayjs";
import { PrimitiveAtom, useAtom } from "jotai";
import {
  TodoListItem,
  todoItemsAtom,
  initTodoListItem,
} from "../../jotai/todoListAtom";
import AddIcon from "@mui/icons-material/Add";

export type TodoListItemProps = {
  todoItemAtom: PrimitiveAtom<TodoListItem>;
  isAdd?: boolean;
};

const TodoItem = (props: TodoListItemProps) => {
  const { todoItemAtom, isAdd } = props;
  const [todoItem, setTodoItem] = useAtom(todoItemAtom);
  const [, setTodoItemList] = useAtom(todoItemsAtom);
  const { title, due, isFinish, isDelete, isError } = todoItem;
  const updateTodoItem = (newValueTodoItem: Partial<TodoListItem>) =>
    setTodoItem((oldValue) => ({ ...oldValue, ...newValueTodoItem }));

  return (
    <ListItem
      style={{
        display: "flex",
        columnGap: "16px",
        color: "black",
        backgroundColor: "white",
        width: "720px",
      }}
    >
      {isAdd ? (
        <IconButton
          aria-label="delete"
          color="primary"
          disabled={!title}
          onClick={() => {
            if (todoItem.title) {
              setTodoItemList((oldvalue) => [...oldvalue, todoItem]);
              updateTodoItem(initTodoListItem);
            }
          }}
        >
          <AddIcon />
        </IconButton>
      ) : (
        <Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
          checked={isFinish}
          onChange={(e) =>
            updateTodoItem({
              isFinish: e.target.checked,
            })
          }
        />
      )}
      <TextField
        error={isError}
        value={title}
        label="todo"
        variant="outlined"
        sx={{ width: "320px" }}
        onChange={(e) => {
          updateTodoItem({ title: e.target.value });
        }}
        onBlur={(e) => {
          const newTitle = e.target.value;
          if (newTitle) {
            updateTodoItem({
              title: newTitle,
              oldTitle: newTitle,
            });
          } else {
            setTodoItem((oldValue) => ({
              ...oldValue,
              title: oldValue.oldTitle,
            }));
          }
        }}
      ></TextField>
      <MobileDatePicker
        label="Date"
        value={due ? dayjs(due) : null}
        format="YYYY/MM/DD"
        onChange={(value) => {
          updateTodoItem({
            due: value?.format("YYYY-MM-DD") || "",
          });
        }}
      />
      <IconButton
        aria-label="delete"
        color="primary"
        disabled={!!isAdd}
        onClick={() => updateTodoItem({ isDelete: !isDelete })}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
