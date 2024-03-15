import { Helmet } from "react-helmet";

import Landing from "../components/Landing";
import styled from "styled-components";

const PageWrapper = styled.div`
  max-width: 100vw;
`;

const LandingPage = () => {
  const brideName = ["Joe", "Christy"];

  return (
    <PageWrapper>
      <Helmet>
        <meta charSet='utf-8' />
        <title>
          The wedding of {brideName[0]} & {brideName[1]} - Inviteyou
        </title>
      </Helmet>

      <Landing />
    </PageWrapper>
  );
};

export default LandingPage;
