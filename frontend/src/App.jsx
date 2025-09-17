// import "./App.css";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Services from "./pages/Services";
import Furniture from "./pages/Furniture";
import Technology from "./pages/Technology";
import Hospitality from "./pages/Hospitality";
import Digital from "./pages/Digital";
import Security from "./pages/Security";
import Network from "./pages/Network";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/service" element={<Services />}>
            <Route path="furniture" element={<Furniture />} />
            <Route path="technology" element={<Technology />} />
            <Route path="network" element={<Network />} />
            <Route path="security" element={<Security />} />
            <Route path="digital" element={<Digital />} />
            <Route path="hospitality" element={<Hospitality />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
