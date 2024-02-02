import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AlertProvider } from "./Context/Alert";

import LoginPage from "./Pages/Login";
import HomePage from "./Pages/Home/home";
import NavBar from "./Components/Navbar/index";
import RegisterPage from "./Pages/Register/index";

function App() {
  return (
    <>
      <AlertProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </AlertProvider>
    </>
  );
}

export default App;
