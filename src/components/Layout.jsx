// src/components/Layout.jsx  -- NEW FILE --

import React from 'react';
// This path MUST point to the new pill header you want to show
import Header from './ui/Header';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20"> {/* pt-20 adds padding so content isn't hidden behind the fixed header */}
        {children} {/* This is where your page content (like Homepage) will be rendered */}
      </main>
      {/* You can add a <Footer /> component here later if you have one */}
    </div>
  );
};

export default Layout;