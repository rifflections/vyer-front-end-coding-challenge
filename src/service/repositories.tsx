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

export type RepositoryService = {
  search: (query?: string) => Promise<Repository[]>;
  searchIssues: (query?: string) => Promise<Issue[]>;
};

export const repositories: RepositoryService = {
  search: async (query) => {
    const response = await http.get("/repositories", { params: { q: query } });
    return response.data.items;
  },
  searchIssues: async (query) => {
    const response = await http.get("/issues", { params: { q: query } });
    return response.data.items;
  }
};