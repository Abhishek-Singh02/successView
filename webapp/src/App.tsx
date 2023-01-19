import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "./components";
import { AppRoutes } from "./routes";
import { ScrollToTop } from "@/components";

function App() {
    return (
        <BrowserRouter>
            <ToastProvider>
                <ScrollToTop />
                <AppRoutes />
            </ToastProvider>
        </BrowserRouter>
    );
}

export default App;
