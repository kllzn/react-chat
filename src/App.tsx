import { useContext } from "react";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { ProtecredRoute } from "./routes/ProtecredRoute";

function App() {
  const currentUser = useContext(AuthContext);
  console.log(currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtecredRoute>
                <Home />
              </ProtecredRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
