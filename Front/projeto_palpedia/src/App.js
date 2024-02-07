import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AlertProvider } from "./Context/Alert";
import { ModalProvider } from "./Context/Modal";

import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import InfoPage from "./Pages/InfoPage";
import NavBar from "./Components/Navbar";
import RegisterPage from "./Pages/Register";
import NotFoundPage from "./Pages/NotFound";

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
            <Route path="/pal" element={<InfoPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </AlertProvider>
      </ModalProvider>
    </>
  );
}

export default App;
