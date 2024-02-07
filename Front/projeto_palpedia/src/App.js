import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AlertProvider } from "./Context/Alert";
import { ModalProvider } from "./Context/Modal";

import LoginPage from "./Pages/Login";
import HomePage from "./Pages/Home/home";
import NavBar from "./Components/Navbar/index";
import RegisterPage from "./Pages/Register/index";
import NotFoundPage from "./Pages/NotFound/index";

function App() {
  return (
    <>
      <ModalProvider>
        <AlertProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </AlertProvider>
      </ModalProvider>
    </>
  );
}

export default App;
