import { Typography } from "@mui/material";

import { repositories } from "../../service/repositories";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { IssueList } from "./issue-list";

type IssueParam = {
  repoName: string;
};

const Issues = () => {
  const { repoName } = useParams<IssueParam>();
  const decodedRepoName = decodeURIComponent(repoName);

  const { isLoading, error, data } = useQuery(
    `issues-${repoName}`,
    () => repositories.searchIssues(`state:open sort:updated-asc repo:${decodedRepoName}`)
  );

  return (
    <>
      {isLoading && (<Typography>Loading...</Typography>)}
      {error && (<Typography>An error poped up: {error}</Typography>)}
      {data && (<IssueList data={data} repoName={decodedRepoName} />)}
    </>
  );
};

export default Issues;
