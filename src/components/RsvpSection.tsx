import { useState } from "react";
import styled from "styled-components";
import color from "../styles/color";
import { AnimatePresence, motion } from "framer-motion";

const BaseInput = styled(motion.input).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, delay: 0.6 },
  className: "flex flex-col",
})`
  padding: 1em;
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: ${color.softWhite};
  color: ${color.primaryBrown};

  &::placeholder {
    color: #b1b1b1;
  }
`;

const Input = styled(BaseInput).attrs({ type: "text" })``;

const Button = styled(motion.button).attrs({})<{ $active?: boolean }>`
  background-color: ${(props) =>
    props.$active ? color.primaryBrown : color.softWhite};
  color: ${(props) => (props.$active ? color.softWhite : color.primaryBrown)};
  padding: 1em 3em;
  border: 1px solid ${color.primaryText};
  outline: none;
  border-radius: 8px;
`;

const InverseButton = styled(Button)`
  background-color: ${(props) =>
    props.$active ? color.softWhite : color.primaryBrown};
  color: ${(props) => (props.$active ? color.primaryBrown : color.softWhite)};
  border: 1px solid ${color.softWhite};
`;

const RsvpSection = () => {
  const [isFilled, setIsFilled] = useState<boolean>();
  const [attend, setAttend] = useState<boolean>();
  const [personCount, setPersonCount] = useState<number>(0);

  const handleAttend = (status: boolean) => {
    if (!isFilled) setIsFilled(true);
    setAttend(status);
  };

  return (
    <div className='w-full h-fit max-lg:px-6 max-lg:py-8 p-12 bg-soft-white flex justify-center flex-col gap-5'>
      <div className='text-[58px] max-md:text-[36px] font-alexBrush text-soft-brown text-center'>
        Will you be able to attend our wedding?
      </div>

      <div className='m-auto gap-2 flex'>
        <Button
          className='transition-all max-w-[40vw]'
          $active={attend && isFilled}
          onClick={() => handleAttend(true)}
        >
          Able to attend
        </Button>
        <Button
          className='transition-all max-w-[40vw]'
          $active={!attend && isFilled}
          onClick={() => handleAttend(false)}
        >
          Unable to attend
        </Button>
      </div>

      {isFilled && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={`bg-soft-brown w-3/12 min-w-[360px] h-fit max-md:w-10/12 m-auto rounded-lg p-10 text-soft-white`}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='mb-6 text-xl'
            >
              Please confirm by filling the data below
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='flex flex-col w-full h-full justify-center items-center gap-4'
            >
              <Input placeholder='Your Name' className='w-full' />
              <Input placeholder='Phone Number' className='w-full' />
              {attend && (
                <div className='flex w-full flex-col'>
                  <p>How many person will come?</p>
                  <div className='w-full flex mt-3 gap-2 justify-center'>
                    <InverseButton
                      $active={personCount === 1}
                      onClick={() => setPersonCount(1)}
                    >
                      1 Person
                    </InverseButton>
                    <InverseButton
                      $active={personCount === 2}
                      onClick={() => setPersonCount(2)}
                    >
                      2 Person
                    </InverseButton>
                  </div>
                </div>
              )}
            </motion.div>

            <div className='w-full flex justify-center gap-5 mt-3'>
              <Button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className='mt-3 w-full'
              >
                Submit
              </Button>
            </div>
            <div className='w-full flex justify-center'>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className='mt-6 text-white cursor-pointer'
                onClick={() => setIsFilled(false)}
              >
                Cancel
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default RsvpSection;
