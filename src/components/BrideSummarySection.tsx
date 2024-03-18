import styled from "styled-components";
import { data, images } from "../constants/data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const bgColor = "#E2EAF4";

const Section = styled.section`
  background-color: ${bgColor};
`;

const SectionContainer = styled.div`
  padding: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin: auto;

  img {
    width: 300px;
  }
`;

const BrideSummary = styled.div`
  display: flex;
  gap: 7em;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4em;
  }
`;

interface BridesCardProps {
  image: string;
  nickname: string;
  name: string;
  biodata: string;
}

const BrideCard = ({ image, nickname, name, biodata }: BridesCardProps) => {
  const { ref, inView } = useInView();

  return (
    <motion.section
      ref={ref} // Pass the ref to SectionContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Use inView to conditionally animate
      transition={{ duration: 1 }}
    >
      <div className='w-[250px] h-[250px]'>
        <img
          src={image}
          alt='bride photo'
          className='rounded-full w-full h-full object-cover border-4 border-white'
        />
      </div>
      <div className='mt-3 flex h-[230px] items-center flex-col gap-2'>
        <div className='text-7xl font-alexBrush text-soft-brown'>
          {nickname}
        </div>
        <div className='text-lg font-bold'>{name}</div>
        <div className='text-xl tracking-wide font-serif text-center my-3'>
          {biodata}
        </div>
      </div>
      <div className='bg-white w-[70px] h-[70px] p-3 flex justify-center items-center rounded-full mx-auto mt-4 cursor-pointer hover:bg-blue-300 transition-colors hover:text-white'>
        <i className='text-2xl fa-brands fa-instagram'></i>
      </div>
    </motion.section>
  );
};

const BrideSummarySection = () => {
  return (
    <Section id='bride-summary-section'>
      <SectionContainer>
        <img
          className='max-lg:hidden'
          src='https://www.bridestory.com/_next/image?url=https%3A%2F%2Falexandra.bridestory.com%2Fimage%2Fupload%2Fdpr_1.0%2Cf_auto%2Cfl_progressive%2Cq_80%2Fv1%2Fassets%2Fgroup-282x-n71nYQ2ew.png&w=384&q=75'
          alt='bride summary leafs'
        />
        <BrideSummary>
          <BrideCard
            image={images.groomsBiodataPhoto}
            nickname={data.groomsNickname}
            name={data.groomsName}
            biodata={data.groomsBiodata}
          />
          <BrideCard
            image={images.bridesBiodataPhoto}
            nickname={data.bridesNickname}
            name={data.bridesName}
            biodata={data.bridesBiodata}
          />
        </BrideSummary>
      </SectionContainer>
    </Section>
  );
};

export default BrideSummarySection;
