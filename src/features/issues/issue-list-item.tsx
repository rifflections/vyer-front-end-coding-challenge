import { ListItem } from "@mui/material";

interface IssueListItemProps {
  title: string;
}

export const IssueListItem = (props: IssueListItemProps) => (
  <ListItem>{props.title}</ListItem>
);
