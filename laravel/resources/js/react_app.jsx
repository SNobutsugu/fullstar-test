import "./bootstrap";

import ReactDOM from "react-dom/client";
import Counter from "./components/react_site/Counter";

function App() {
    return (
        <div>
            <h1>Hello React</h1>
            <Counter />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
