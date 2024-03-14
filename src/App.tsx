import { ThemeProvider } from "styled-components";
import "./App.css";
import { darkTheme, lightTheme } from "./styles/theme";
import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import InvitationPage from "./pages/InvitationPage";
import ProtectedRoute from "./router/ProtectedRoute";

import invitedGuests from "./guestList.json";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleChange);
    setIsDarkMode(darkModeMediaQuery.matches);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const isUserInvited = (): boolean => {
    const isInvited = invitedGuests.guests.findIndex(
      (guest) => guest.name.toLowerCase() === "john doe"
    );

    return isInvited !== -1;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/invitation",
      element: (
        <ProtectedRoute isInvited={isUserInvited()}>
          <InvitationPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "*",
      element: <h1>404</h1>,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
