import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<NoPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
