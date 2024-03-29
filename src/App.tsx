import { useLocation, useRoutes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import InvitationPage from "./pages/InvitationPage";
import { AnimatePresence } from "framer-motion";

import "./App.css";
import "./style.css";
import React from "react";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/invitation",
      element: <InvitationPage />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode='wait'>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

// TODO: rapihin wishes section
// TODO: tambahin animasi

export default App;
