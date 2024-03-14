import { ThemeProvider } from "styled-components";
import "./App.css";
import BrideSummarySection from "./components/BrideSummarySection";
import CountingDays from "./components/CountingDays";
import HeroSection from "./components/HeroSection";
import VerseSection from "./components/VerseSection";
import { darkTheme, lightTheme } from "./styles/theme";
import { useEffect, useState } from "react";
import Wishes from "./components/Wishes";

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

  return (
    <ThemeProvider theme={theme}>
      <HeroSection />
      <VerseSection />
      <BrideSummarySection />
      <CountingDays />
      <Wishes />
    </ThemeProvider>
  );
}

export default App;
