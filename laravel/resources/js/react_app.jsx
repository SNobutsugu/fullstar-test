import "./bootstrap";

import ReactDOM from "react-dom/client";
import Index from "./components/react_site";
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Index />
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
