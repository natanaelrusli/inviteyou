import styled from "styled-components";
import { data } from "../constants/data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import color from "../styles/color";
import ImageSlider from "./ImageSlider";

export const SkeletonLoader = styled.div`
  min-width: 360px;
  min-height: 480px;
  background-color: #f0f0f0; /* Placeholder background color */
  border-radius: 40px;
  margin-bottom: 0.5em;
  animation: loadingAnimation 1s infinite ease-in-out alternate; /* Animation for loading effect */

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    height: 300px; /* Adjust height for smaller screens */
  }

  @keyframes loadingAnimation {
    from {
      opacity: 0.8;
    }
    to {
      opacity: 0.3;
    }
  }
`;

const Section = styled.section`
  background-color: #fefbf9;
  background-color: ${color.softWhite};
  padding: 5em 2em;

  @media (max-width: 768px) {
    padding: 3em 1em;
  }
`;

const SectionContainer = styled(motion.div)`
  width: 40%;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 2em;
  min-width: 600px;

  @media (max-width: 768px) {
    min-width: 0px;
    width: 80%;
    flex-direction: column;
  }
`;

export const RoundedImage = styled(motion.img)`
  // Use motion for the RoundedImage
  box-shadow: rgba(0, 0, 0, 0.17) 8px 16px 24px 0px;
  border-radius: 40px;
  width: 362px;
  height: 362px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const VerseDiv = styled.div`
  img {
    margin-bottom: 0.5em;
  }

  div.verse {
    margin-top: 1em;
    font-weight: bold;
    letter-spacing: 4px;
    color: ${color.primaryText};
  }
  text-align: center;
  color: ${color.primaryText};

  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`;

const VerseSection = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const { ref, inView } = useInView();

  // const handleImageLoad = () => {
  //   setIsLoading(false);
  // };

  return (
    <Section id='verse-section'>
      <SectionContainer
        ref={ref} // Pass the ref to SectionContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Use inView to conditionally animate
        transition={{ duration: 1 }}
      >
        <ImageSlider
          images={[
            {
              src: "https://www.indonesia-investments.com/upload/images/joko-widodo-jokowi-president-of-indonesia-2014-2019-indonesia-investments.jpg",
              title: "image 1",
            },
            {
              src: "https://unsplash.com/photos/MMNgGsFEbuI/download?force=true&w=2400",
              title: "image 2",
            },
            {
              src: "https://images.unsplash.com/photo-1711419398844-5fd29b9e0543?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "image 3",
            },
          ]}
        />

        <VerseDiv>
          <p>“{data.verseContents}”</p>
          <div className='verse'>{data.verse}</div>
        </VerseDiv>
      </SectionContainer>
    </Section>
  );
};

export default VerseSection;
