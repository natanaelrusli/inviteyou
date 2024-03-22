import { Helmet } from "react-helmet";

import Landing from "../components/Landing";
import styled from "styled-components";
import { data } from "../constants/data";
import { motion } from "framer-motion";

const PageWrapper = styled.div`
  max-width: 100vw;
`;

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const LandingPage = () => {
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

        <Landing />
      </PageWrapper>
    </motion.div>
  );
};

export default LandingPage;
