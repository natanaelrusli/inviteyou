import "./App.css";
import BrideSummarySection from "./components/BrideSummarySection";
import CountingDays from "./components/CountingDays";
import HeroSection from "./components/HeroSection";
import VerseSection from "./components/VerseSection";

function App() {
  return (
    <>
      <HeroSection />
      <VerseSection />
      <BrideSummarySection />
      <CountingDays />
    </>
  );
}

export default App;
