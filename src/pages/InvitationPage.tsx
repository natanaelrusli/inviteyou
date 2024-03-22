import { Helmet } from "react-helmet";

import BrideSummarySection from "../components/BrideSummarySection";
import CountingDays from "../components/CountingDays";
import HeroSection from "../components/HeroSection";
import VerseSection from "../components/VerseSection";
import Wishes from "../components/Wishes";
import styled from "styled-components";
import AngpaoSection from "../components/AngpaoSection";
import { data } from "../constants/data";
import ImageSlider from "../components/ImageSlider";
import RsvpSection from "../components/RsvpSection";

const PageWrapper = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
`;

const InvitationPage = () => {
  return (
    <PageWrapper>
      <Helmet>
        <meta charSet='utf-8' />
        <title>
          The wedding of {data.groomsNickname} & {data.bridesNickname} -
          Inviteyou
        </title>
      </Helmet>

      <HeroSection />
      <BrideSummarySection />
      <ImageSlider />
      <VerseSection />
      <CountingDays />
      <RsvpSection />
      <AngpaoSection />
      <Wishes />
      {/* <GuestsList guestNames={guestNames} /> */}
    </PageWrapper>
  );
};

export default InvitationPage;
