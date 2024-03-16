import { Helmet } from "react-helmet";

import BrideSummarySection from "../components/BrideSummarySection";
import CountingDays from "../components/CountingDays";
import HeroSection from "../components/HeroSection";
import VerseSection from "../components/VerseSection";
import Wishes from "../components/Wishes";
import styled from "styled-components";
import AngpaoSection from "../components/AngpaoSection";

const PageWrapper = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
`;

const InvitationPage = () => {
  const brideName = ["Joe", "Christy"];

  return (
    <PageWrapper>
      <Helmet>
        <meta charSet='utf-8' />
        <title>
          The wedding of {brideName[0]} & {brideName[1]} - Inviteyou
        </title>
      </Helmet>

      <HeroSection />
      <VerseSection />
      <BrideSummarySection />
      <CountingDays />
      <AngpaoSection />
      <Wishes />
      {/* <GuestsList guestNames={guestNames} /> */}
    </PageWrapper>
  );
};

export default InvitationPage;
