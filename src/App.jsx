// src/App.jsx -- FINAL, CORRECTED CODE --

import React from "react";
import Routes from "./Routes";
import { HelmetProvider } from 'react-helmet-async'; // <-- IMPORT THIS

function App() {
  return (
    // WRAP YOUR ROUTES WITH HELMET PROVIDER
    <HelmetProvider>
      <Routes />
    </HelmetProvider>
  );
}

export default App;