import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { DoweitWidget } from "@doweit/voice";
import { client, setNavigator } from "./doweit";

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
import Contact from "./components/Contact";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Hand React Router's navigate() to the Doweit actions so the assistant
    // does true client-side navigation (no full page reload).
    setNavigator(navigate);
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
          <Route path="/contact" element={<Contact />} />
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
      <DoweitWidget client={client} />
    </>
  );
}

export default App;
