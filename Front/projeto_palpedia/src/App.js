import "./App.css";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./Pages/Register/register";
import { AlertProvider } from "./Context/Alert";

function App() {
  return (
    <>
      <AlertProvider>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
        </Routes>
      </AlertProvider>
    </>
  );
}

export default App;
