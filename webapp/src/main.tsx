import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { globalStyles } from "@/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

globalStyles();
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>
);
