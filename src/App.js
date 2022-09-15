import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./components/Signin";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dosraPage" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
