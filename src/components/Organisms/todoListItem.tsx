import { Checkbox, IconButton, ListItem, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import DeleteIcon from "@mui/icons-material/delete";
import dayjs from "dayjs";
import { PrimitiveAtom, useAtom } from "jotai";
import { TodoListItemsAtom } from "../../jotai/todoListAtom";

export type TodoListItemProps = {
  todoItemAtom: PrimitiveAtom<TodoListItemsAtom[number]>;
};

const TodoItem = (props: TodoListItemProps) => {
  const { todoItemAtom } = props;
  const [todoItem, setTodoItem] = useAtom(todoItemAtom);
  const { title, due } = todoItem;

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
      <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
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
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
