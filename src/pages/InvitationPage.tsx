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
import { motion } from "framer-motion";

const PageWrapper = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
`;

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

// const itemVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible,
// };

const InvitationPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 1 }}
      animate={visible}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
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

        <div className='py-12 bg-soft-white'>
          <ImageSlider />
        </div>

        <VerseSection />
        <CountingDays />
        <RsvpSection />
        <AngpaoSection />
        <Wishes />
        {/* <GuestsList guestNames={guestNames} /> */}
      </PageWrapper>
    </motion.div>
  );
};

export default InvitationPage;
