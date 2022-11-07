import http from "./http";

export type Repository = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  open_issues_count: number;
};

export type Issue = {
  id: number;
  title: string;
};

export type SearchIssuesResponse = {
  items: Issue[];
  total_count: number;
}

export type RepositoryService = {
  search: (query?: string) => Promise<Repository[]>;
  searchIssues: (query?: string, page?: number, per_page?: number) => Promise<SearchIssuesResponse>;
};

export const repositories: RepositoryService = {
  search: async (query) => {
    const response = await http.get("/repositories", { params: { q: query } });
    return response.data.items;
  },
  searchIssues: async (query, page, per_page) => {
    const response = await http.get("/issues", { params: { q: query, page, per_page } });
    return {
      items: response.data.items,
      total_count: response.data.total_count
    };
  }
};