import { Helmet } from "react-helmet";

import Landing from "../components/Landing";

const LandingPage = () => {
  const brideName = ["Joe", "Christy"];

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>
          The wedding of {brideName[0]} & {brideName[1]} - Inviteyou
        </title>
      </Helmet>

      <Landing />
    </>
  );
};

export default LandingPage;
