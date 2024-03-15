import { useLoaderData } from "react-router-dom";
import BrideSummarySection from "../components/BrideSummarySection";
import CountingDays from "../components/CountingDays";
import HeroSection from "../components/HeroSection";
import VerseSection from "../components/VerseSection";
import Wishes from "../components/Wishes";
import GuestsList from "../components/GuestsList";

interface Guest {
  name: string;
}

const InvitationPage = () => {
  const guests = useLoaderData() as Guest[];
  const guestNames: string[] = guests.map((guest) => guest.name);

  return (
    <>
      <HeroSection />
      <VerseSection />
      <BrideSummarySection />
      <CountingDays />
      <Wishes />
      <GuestsList guestNames={guestNames} />
    </>
  );
};

export default InvitationPage;
