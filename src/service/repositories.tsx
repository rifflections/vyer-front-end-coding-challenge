import http from "./http";

export type Repository = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  open_issues_count: number;
};

export type RepositoryService = {
  search: (query?: string) => Promise<Repository[]>;
};

export const repositories: RepositoryService = {
  search: async (query) => {
    const response = await http.get("/repositories", { params: { q: query } });
    return response.data.items;
  }
};