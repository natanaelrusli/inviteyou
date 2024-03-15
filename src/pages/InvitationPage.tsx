import { Helmet } from "react-helmet";
import BrideSummarySection from "../components/BrideSummarySection";
import CountingDays from "../components/CountingDays";
import HeroSection from "../components/HeroSection";
import VerseSection from "../components/VerseSection";
import Wishes from "../components/Wishes";
// import GuestsList from "../components/GuestsList";
// import { useLoaderData } from "react-router-dom";

// interface Guest {
//   name: string;
// }

const InvitationPage = () => {
  // const guests = useLoaderData() as Guest[];

  // const guestNames: string[] = guests.map((guest) => guest.name);
  const brideName = ["Joe", "Christy"];

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>
          Wedding Invitation of {brideName[0]} & {brideName[1]} - Inviteyou
        </title>
      </Helmet>

      <HeroSection />
      <VerseSection />
      <BrideSummarySection />
      <CountingDays />
      <Wishes />
      {/* <GuestsList guestNames={guestNames} /> */}
    </>
  );
};

export default InvitationPage;
