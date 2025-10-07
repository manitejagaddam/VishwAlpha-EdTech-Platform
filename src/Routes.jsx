// Routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import Services from './pages/services';
import Contact from './pages/contact';
import InternationalPresence from './pages/international-presence';
import About from './pages/about';
import Activities from './pages/activities';
import Homepage from './pages/homepage';

const AppRoutes = () => {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/international-presence" element={<InternationalPresence />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default AppRoutes;
