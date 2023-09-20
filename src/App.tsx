import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
