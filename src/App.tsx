import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CookieBanner from "./components/CookieBanner";
import RegisterLogin from "./pages/login";
import LMS from "./pages/LMS";
import Home from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterLogin />} />
        <Route path="/lms/*" element={<LMS />} />
      </Routes>
      <CookieBanner />
    </Router>
  );
}

export default App;
