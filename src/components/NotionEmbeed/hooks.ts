import { useQuery } from "react-query";
import { getNotionPage } from "../../services/notion.services";
import {
  DEFAULT_QUERY_OPTIONS,
  QueryPrefixes,
} from "../../services/query.client";

export const useGetNotionPage = (pageId: string) =>
  useQuery(
    [QueryPrefixes.NOTION_PAGE, pageId],
    () => getNotionPage(pageId),
    DEFAULT_QUERY_OPTIONS
  );
