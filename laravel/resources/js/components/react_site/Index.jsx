import { Routes, Route } from 'react-router-dom';
import Counter from "./Counter";
import One from "./One";
import Two from "./Two";
import NoMatch from "./NoMatch"
function App() {
    return (
        <div className="App">
            <h1>Hello React Router v6</h1>
            <Routes>
                <Route exact path="/react" element={<Counter />} />
                <Route exact path="/react/one" element={<One />} />
                <Route exact path="/react/two" element={<Two />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>

        </div>
    );
}

export default App;
