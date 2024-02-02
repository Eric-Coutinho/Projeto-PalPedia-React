import "./App.css";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./Pages/Register/index";
import { AlertProvider } from "./Context/Alert";
import LoginPage from "./Pages/Login";

function App() {
  return (
    <>
      <AlertProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </AlertProvider>
    </>
  );
}

export default App;
