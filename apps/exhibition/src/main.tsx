//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router";
import './global.scss';

createRoot(document.getElementById("root")!).render(
        <Router>
            <AppRouter/>
        </Router>
)