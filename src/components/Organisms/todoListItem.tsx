import { Checkbox, IconButton, ListItem, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
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
  const { title, due, isFinish: isFinished, isDeleted } = todoItem;

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
          onClick={() => {
            if (todoItem.due && todoItem.title) {
              setTodoItemList((oldvalue) => [...oldvalue, todoItem]);
              setTodoItem(initTodoListItem);
            }
          }}
        >
          <AddIcon />
        </IconButton>
      ) : (
        <Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
          checked={isFinished}
          onChange={(e) =>
            setTodoItem((oldValue) => ({
              ...oldValue,
              isFinish: e.target.checked,
            }))
          }
        />
      )}
      <TextField
        value={title}
        label="todo"
        variant="outlined"
        sx={{ width: "320px" }}
        onChange={(e) => {
          setTodoItem((oldValue) => ({ ...oldValue, title: e.target.value }));
        }}
      ></TextField>
      <DatePicker
        label="Date"
        value={due ? dayjs(due) : null}
        format="YYYY/MM/DD"
        onChange={(value) => {
          setTodoItem((oldValue) => ({
            ...oldValue,
            due: value?.format("YYYY-MM-DD") || "",
          }));
        }}
      />
      <IconButton
        aria-label="delete"
        color="primary"
        disabled={!!isAdd}
        onClick={() =>
          setTodoItem((oldValue) => ({ ...oldValue, isDelete: !isDeleted }))
        }
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
