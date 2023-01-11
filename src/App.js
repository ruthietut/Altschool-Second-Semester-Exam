import Users from "./Routes/Users";
import About from "./Routes/About";
import Error from "./components/Error";
import Home from "./Routes/Home";
import ErrorTest from "./Routes/ErrorTest";

import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import SignIn from "./Routes/SignIn";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Users" element={<Users />} />
            <Route path="SignIn" element={<SignIn />} />
            <Route path="Errortest" element={<ErrorTest />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
