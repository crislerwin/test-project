import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import { useGetNotionPage } from "./hooks";

export const NotionEmbeed: React.FC<{ pageId: string }> = ({ pageId }) => {
  const { data, isFetching } = useGetNotionPage(pageId);
  return (
    <>
      {data && !isFetching && (
        <NotionRenderer fullPage hideHeader blockMap={data} />
      )}
    </>
  );
};
