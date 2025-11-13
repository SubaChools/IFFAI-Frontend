import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CookieBanner from "./components/CookieBanner";
import RegisterLogin from "./pages/login";
import LMS from "./pages/LMS";
import Product from "./pages/ProductOne";
import Course from "./pages/course";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/HomePage";
import ProductTwo from "./pages/ProductTwo";
import ProductThree from "./pages/ProductThree";
import ProductFour from "./pages/ProductFour";
import ProductFive from "./pages/ProductFive";
import ProductSix from "./pages/ProductSix";
import ProductSeven from "./pages/ProductSeven";
import ProductEight from "./pages/ProductEight";
import ProductNine from "./pages/ProductNine";
import ProductTen from "./pages/ProductTen";
import ProductEleven from "./pages/ProductEleven";
import ProductTwelve from "./pages/ProductTwelve";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterLogin />} />
        <Route path="/lms/*" element={<LMS />} />
        <Route path="/product/*" element={<Product />} />
        <Route path="/product2/*" element={<ProductTwo />} />
        <Route path="/product3/*" element={<ProductThree />} />
        <Route path="/product4/*" element={<ProductFour />} />
        <Route path="/product5/*" element={<ProductFive />} />
        <Route path="/product6/*" element={<ProductSix />} />
        <Route path="/product7/*" element={<ProductSeven />} />
        <Route path="/product8/*" element={<ProductEight />} />
        <Route path="/product9/*" element={<ProductNine />} />
        <Route path="/product10/*" element={<ProductTen />} />
        <Route path="/product11/*" element={<ProductEleven />} />
        <Route path="/product12/*" element={<ProductTwelve />} />
        <Route path="/course/*" element={<Course />} />
        <Route path="/aboutus/*" element={<AboutUs />} />
      </Routes>
      <CookieBanner />
    </Router>
  );
}

export default App;
