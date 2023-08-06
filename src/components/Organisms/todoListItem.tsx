import { Checkbox, ListItem, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export type TodoListItemProps = {
  title: string;
  due: Date;
};

const TodoListItem = (props: TodoListItemProps) => {
  const { title, due } = props;

  return (
    <ListItem>
      <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <Typography>{title}</Typography>
      <DatePicker value={due} />
    </ListItem>
  );
};

export default TodoListItem;
