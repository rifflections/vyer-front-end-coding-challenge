import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { repositories } from "../../service/repositories";
import { IssueList } from "./issue-list";

type IssueParam = {
  repoName: string;
};

const Issues = () => {
  const { repoName } = useParams<IssueParam>();
  const decodedRepoName = decodeURIComponent(repoName);
  const [page, setPage] = useState(1);
  const itemsPerPage = 25;

  const { isLoading, error, data } = useQuery(
    [`issues-${repoName}`, page],
    () => repositories.searchIssues(`state:open sort:updated-asc repo:${decodedRepoName}`, page, itemsPerPage)
  );

  return (
    <IssueList
      isLoading={isLoading}
      error={error}
      data={data}
      page={page}
      title={decodedRepoName}
      pageChange={(event: React.ChangeEvent<unknown>, value: number) => setPage(value)} />
  );
};

export default Issues;
