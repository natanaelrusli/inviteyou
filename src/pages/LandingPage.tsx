import { Helmet } from "react-helmet";

import Landing from "../components/Landing";
import styled from "styled-components";
import { data } from "../constants/data";

const PageWrapper = styled.div`
  max-width: 100vw;
`;

const LandingPage = () => {
  return (
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
  );
};

export default LandingPage;
