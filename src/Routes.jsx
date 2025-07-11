// src/Routes.jsx -- FINAL, CORRECTED CODE --

import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import Layout from "components/Layout"; // <-- 1. IMPORT THE NEW LAYOUT

// Page imports
import Homepage from "pages/homepage";
import Contact from "pages/contact";
import Portfolio from "pages/portfolio";
import PricingPackages from "pages/pricing-packages";
import About from "pages/about";
import ServicesDetail from "pages/services-detail";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* 2. WRAP EVERY PAGE WITH THE <Layout> COMPONENT */}
          <Route path="/" element={<Layout><Homepage /></Layout>} />
          <Route path="/homepage" element={<Layout><Homepage /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
          <Route path="/pricing-packages" element={<Layout><PricingPackages /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/services-detail" element={<Layout><ServicesDetail /></Layout>} />
          
          {/* The "Not Found" page usually doesn't need the main layout */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;