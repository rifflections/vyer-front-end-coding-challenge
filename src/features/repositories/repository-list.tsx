import { Grid } from "@mui/material";
import { RepositoryListItem } from "./repository-list-item";

import { Repository } from "../../service/repositories";

interface RepositoryListProps {
  data: Repository[]
}

export const RepositoryList = (props: RepositoryListProps) => {
  return (
    <Grid container direction="column" spacing={2}>
      {props.data.map((node) => (
        <RepositoryListItem
          key={node?.id}
          description={node?.description}
          name={node?.name}
          full_name={encodeURIComponent(node?.full_name)}
        />
      ))}
    </Grid>
  );
};
