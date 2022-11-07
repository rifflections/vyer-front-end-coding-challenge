import { Typography, List, Button } from "@mui/material";

import { Link as RouterLink } from 'react-router-dom';

import { IssueListItem } from "./issue-list-item";

import { SearchIssuesResponse } from "../../service/repositories";
import { PaginationComponent } from '../../components/pagination';
import { LoadingWrapper } from "../../components/loading";
import { ErrorWrapper } from "../../components/error";

interface IssueListProps {
  isLoading: boolean;
  error?: string;
  data?: SearchIssuesResponse,
  title: string,
  page: number,
  pageChange: (event: React.ChangeEvent<unknown>, page: number) => void,
}

export const IssueList = (props: IssueListProps) => {
  const { data, page, isLoading, error } = props;
  const itemsPerPage: number = 25;

  return (
    <div>
      <Button variant="outlined" component={RouterLink} to="/" sx={{ mb: 2 }}>Back to repositories</Button>
      <Typography
        id="issue-list"
        textTransform="uppercase"
        fontWeight="xl"
        mb={1}
      >{`${data && data.items.length === 0 ? 'No open issues' : 'Open issues'} for '${props.title}' repository`}</Typography>

      {isLoading && (<LoadingWrapper message='Loading results...' />)}
      {error && (<ErrorWrapper message={error} />)}

      {data && (
        <>
          <List aria-labelledby="issue-list">
            {data.items.map((item) => (
              <IssueListItem
                key={item?.id}
                title={item?.title}
              />
            ))}
          </List>
          {
            (data.total_count > itemsPerPage) && (
              <PaginationComponent
                page={page}
                count={Math.floor(data.total_count / itemsPerPage)}
                pageChange={props.pageChange} />
            )
          }
        </>
      )}
    </div>
  );
};
