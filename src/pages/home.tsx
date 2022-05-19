import { useState } from "react";
import { useParams, useNavigate, Location } from "react-router-dom";
import { pages } from "../database/pages";
import { NotionEmbeed } from "../components/NotionEmbeed";

const Notion = () => {
  const { id: pageId } = useParams();

  return <>{pageId && <NotionEmbeed pageId={pageId} />}</>;
};

export default Notion;
