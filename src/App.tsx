import { QueryClientProvider } from "react-query";
import Table from "./components/Table";
import { queryClient } from "./services/query.client";

export default function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <Table />
      </QueryClientProvider>
  );
}
