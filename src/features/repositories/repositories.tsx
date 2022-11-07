import { Typography } from "@mui/material";
import { Suspense } from "react";
import { RepositoryList } from "./repository-list";

import { repositories } from "../../service/repositories";

import { useQuery } from "react-query";

const Repositories = () => {
  const { isLoading, error, data } = useQuery(
    "repositories",
    () => repositories.search("react in:repo org:facebook")
  );
  return (
    <Suspense fallback={<Typography>Loading...</Typography>}>
      {data ? (
        <RepositoryList data={data} />
      ) : (
        <Typography>No results match the search criteria.</Typography>
      )}
    </Suspense>
  );
};

export default Repositories;
