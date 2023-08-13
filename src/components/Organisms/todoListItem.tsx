import { Checkbox, IconButton, ListItem, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import DeleteIcon from "@mui/icons-material/delete";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

export type TodoListItemProps = {
  index: number,
  title: string;
  due: string;
};

const TodoListItem = (props: TodoListItemProps) => {
  const { title, due } = props;
  return (
    <ListItem
      style={{ color: "black", backgroundColor: "white", width: "720px" }}
    >
      <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <Typography minWidth={315} marginRight={5}>
        {title}
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={due ? dayjs(Date.now()) : dayjs(due)}
          format="YYYY/MM/DD"
        />
      </LocalizationProvider>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoListItem;
