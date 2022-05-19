import axios from "axios";

export const notionWorker = axios.create({
  baseURL: import.meta.env.VITE_NOTION_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_NOTION_ACCESS_TOKEN}`,
  },
});
