import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import Layout from "./Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./components/Auth";

function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <BrowserRouter style={{ display: "flex" }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="auth" element={<Login />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
