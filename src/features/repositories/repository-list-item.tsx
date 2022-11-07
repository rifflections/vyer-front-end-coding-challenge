import { Card, Chip, CardContent, Grid, Typography, Link } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

interface RepositoryListItemProps {
  id: number;
  description?: string | null;
  name?: string;
  full_name?: string;
  open_issues_count?: number;
}

export const RepositoryListItem = (props: RepositoryListItemProps) => {
  const { id, description, name, full_name, open_issues_count } = props;
  return (
    <Grid item xs={3}>
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5">
            {name} <Link component={RouterLink} to={`/issues/${full_name}`} key={id}><Chip
              variant="outlined"
              color="primary"
              size="small"
              sx={{
                borderRadius: 'sm',
                py: 0.25,
                px: 0.5,
                ml: 1,
              }}
              label={`Open issues ${open_issues_count}`}
            ></Chip></Link>
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
