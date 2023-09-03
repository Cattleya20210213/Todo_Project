import {
  Checkbox,
  IconButton,
  ListItem,
  SxProps,
  TextField,
} from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import DeleteIcon from "@mui/icons-material/delete";
import dayjs from "dayjs";
import { PrimitiveAtom, useAtom } from "jotai";
import { todoListAtom, isAddable, isDeleted } from "../../jotai/atoms";
import AddIcon from "@mui/icons-material/Add";
import { TodoItemInfo } from "../../jotai/type/todoItemInfo";

type TodoItemProps = {
  type: "list_item";
  todoItemAtom: PrimitiveAtom<TodoItemInfo>;
  listItemSx: SxProps;
};

type AddItemProps = Pick<TodoItemProps, "todoItemAtom" | "listItemSx"> & {
  type: "add_item";
  todoListAtom: typeof todoListAtom;
};

export type TodoListItemProps = TodoItemProps | AddItemProps;

const TodoListItem = (props: TodoListItemProps) => {
  const { type, todoItemAtom } = props;
  const [todoItem, setTodoItem] = useAtom(todoItemAtom);
  const { title, due, isFinish, isDelete, isError } = todoItem;
  const updateTodoItem = (newValueTodoItem: Partial<TodoItemInfo>) =>
    setTodoItem((oldValue) => ({ ...oldValue, ...newValueTodoItem }));
  const [, setIsAddTodoItem] = useAtom(isAddable);
  const [, setIsDeleteTodoItem] = useAtom(isDeleted);
  const isTypeAdd = type === "add_item";

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
      {isTypeAdd ? (
        <IconButton
          aria-label="delete"
          color="primary"
          disabled={!title}
          onClick={() => {
            setIsAddTodoItem(!!todoItem.title);
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
              isError: false,
            });
          } else {
            if (!isTypeAdd) {
              updateTodoItem({ title: todoItem.oldTitle, isError: true });
            }
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
        disabled={!!isTypeAdd}
        onClick={() => {
          updateTodoItem({ isDelete: !isDelete });
          setIsDeleteTodoItem(true);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoListItem;
