import axios from "axios";
import { BlockMapType } from "react-notion";
import { notionWorker } from "./workers";

export const getNotionPage = async (pageId: string): Promise<BlockMapType> => {
  const { data } = await notionWorker.get(`page/${pageId}`);
  return data;
};
