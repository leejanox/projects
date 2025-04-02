import Loading from "@components/loading";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./global.scss";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Router>
            <Loading/>
        </Router>
    </StrictMode>
)