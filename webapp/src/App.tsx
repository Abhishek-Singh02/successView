import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "./components";
import { AppRoutes } from "./routes";

function App() {
    return (
        <BrowserRouter>
            <ToastProvider>
                <AppRoutes />
            </ToastProvider>
        </BrowserRouter>
    );
}

export default App;
