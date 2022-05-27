import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Table from "./components/Table";
import { Router } from "./routes";
import { queryClient } from "./services/query.client";

export default function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <Table />
      </QueryClientProvider>
  );
}
