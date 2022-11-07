import { Typography, List, Button } from "@mui/material";
import { IssueListItem } from "./issue-list-item";

import { Issue } from "../../service/repositories";
import { Link as RouterLink } from 'react-router-dom';

interface IssueListProps {
  data: Issue[],
  repoName: string
}

export const IssueList = (props: IssueListProps) => {
  const message = props.data.length === 0 ? 'No open issues' : 'Open issues';
  return (
    <div>
      <Button variant="outlined" component={RouterLink} to="/" sx={{ mb: 2 }}>Back to repositories</Button>
      <Typography
        id="issue-list"
        textTransform="uppercase"
        fontWeight="xl"
        mb={1}
      >{`${message} for '${props.repoName}' repository`}</Typography>
      <List aria-labelledby="issue-list">
        {props.data.map((node) => (
          <IssueListItem
            key={node?.id}
            title={node?.title}
          />
        ))}
      </List>
    </div>
  );
};
