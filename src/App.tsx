import React from "react";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>To Do List</h1>
        <AddTodo />
        <ListTodo />
      </div>
    </QueryClientProvider>
  );
}

export default App;
