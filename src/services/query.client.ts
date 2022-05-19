import { QueryClient, useQuery } from "react-query";
import { getNotionPage } from "./notion.services";

export const queryClient = new QueryClient();
export enum QueryPrefixes {
  NOTION_PAGE = "notion-page",
}

export const DEFAULT_QUERY_OPTIONS = {
  staleTime: 60000,
  refetchOnWindowFocus: false,
};
