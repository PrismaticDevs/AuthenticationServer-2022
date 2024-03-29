import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./components/Auth";
import HTML_CSS from "./pages/HTML_CSS";
import JavaScript from "./pages/JavaScript";
import Nodejs from "./pages/Nodejs";
import Express from "./pages/Express";
import Project1 from "./pages/Project1";

function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <BrowserRouter style={{ display: "flex" }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="webdesign" element={<HTML_CSS />} />
              <Route path="javascript" element={<JavaScript />} />
              <Route path="nodejs" element={<Nodejs />} />
              <Route path="express" element={<Express />} />
              <Route path="project1" element={<Project1 />} />
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
