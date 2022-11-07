import { Pagination, Stack } from "@mui/material";

interface PaginationProps {
  page: number,
  count: number,
  pageChange: (event: React.ChangeEvent<unknown>, page: number) => void,
}

export const PaginationComponent = (props: PaginationProps) => (
  <Stack spacing={2}>
    <Pagination count={props.count} page={props.page} onChange={props.pageChange} />
  </Stack>
);
