import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { useAuthStore } from "./store/authStore";
import InvitationPage from "./pages/InvitationPage";
import LandingPage from "./pages/LandingPage";

import "./App.css";
import "./style.css";

function App() {
  const { authenticated } = useAuthStore();

  return (
    <HelmetProvider>
      <AnimatePresence mode='wait'>
        {authenticated ? (
          <InvitationPage key={"invitation-page"} />
        ) : (
          <LandingPage key={"landing-page"} />
        )}
      </AnimatePresence>
    </HelmetProvider>
  );
}

export default App;
