import { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { DoweitWidget } from "@doweit/voice";
import { client } from "./doweit";

import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Furniture from "./pages/Furniture";
import Technology from "./pages/Technology";
import Hospitality from "./pages/Hospitality";
import Digital from "./pages/Digital";
import Security from "./pages/Security";
import Network from "./pages/Network";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Tell the AI how to navigate using React Router
    client.enableNavigation(navigate);
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/service/furniture" element={<Furniture />} />
          <Route path="/service/technology" element={<Technology />} />
          <Route path="/service/network" element={<Network />} />
          <Route path="/service/security" element={<Security />} />
          <Route path="/service/digital" element={<Digital />} />
          <Route path="/service/hospitality" element={<Hospitality />} />
        </Route>
      </Routes>

      {/* 
          Render the widget UNCONDITIONALLY. 
          Do not use a "ready" state. The widget handles its own loading.
      */}
      <DoweitWidget client={client} theme="light" />
    </>
  );
}

export default App;