import Users from "./Users";
import About from "./About";
import Error from "./Error";
import Home from "./Home";
import ErrorTest from "./ErrorTest";

import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import SignIn from "./SignIn";

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
