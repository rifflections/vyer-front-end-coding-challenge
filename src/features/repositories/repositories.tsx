import { Typography } from "@mui/material";

import { RepositoryList } from "./repository-list";
import { repositories } from "../../service/repositories";
import { useQuery } from "react-query";

import { LoadingWrapper } from "../../components/loading";
import { ErrorWrapper } from "../../components/error";
import { InformationWrapper } from "../../components/information";

const Repositories = () => {
  const { isLoading, error, data } = useQuery(
    "repositories",
    () => repositories.search("react in:repo org:facebook")
  );
  return (
    <>
      {!data && isLoading && (<LoadingWrapper message="Loading repositories..." />)}
      {error && (<ErrorWrapper message={`An error poped up: ${error}`} />)}
      {data && data.length === 0 && (<InformationWrapper message="No issues match the search criteria REPOS." />)}
      {data && (<RepositoryList data={data} />)}
    </>
  );
};

export default Repositories;
