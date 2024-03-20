import { useEffect, useState } from "react";
import styled from "styled-components";

const CountdownText = styled.div`
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  margin-top: 1em;
`;

const TimeCard = ({ time, text }: { time: number; text: string }) => {
  return (
    <>
      {time > 0 && (
        <div className='bg-soft-brown p-3 max-lg:flex-1 text-center rounded-lg text-white flex flex-col gap-2 w-[120px]'>
          <div className='text-3xl truncate'>{time}</div>
          <div className='font-alexBrush text-4xl'>{text}</div>
        </div>
      )}
    </>
  );
};

const CountdownTimer = ({
  card = true,
  date,
}: {
  card?: boolean;
  date: string;
}) => {
  const [remainingTime, setRemainingTime] = useState("");
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const weddingDate = new Date(date);
    const currentDate = new Date();
    const differenceInTime = weddingDate.getTime() - currentDate.getTime();
    const daysLeft = Math.floor(differenceInTime / (1000 * 3600 * 24));

    const yearsLeft = Math.floor(daysLeft / 365);
    const monthsLeft = Math.floor((daysLeft % 365) / 30);
    const weeksLeft = Math.floor(((daysLeft % 365) % 30) / 7);
    const remainingDays = ((daysLeft % 365) % 30) % 7;

    const formattedTime = [];

    if (yearsLeft > 0)
      formattedTime.push(`${yearsLeft} year${yearsLeft !== 1 ? "s" : ""}`);
    if (monthsLeft > 0)
      formattedTime.push(`${monthsLeft} month${monthsLeft !== 1 ? "s" : ""}`);
    if (weeksLeft > 0)
      formattedTime.push(`${weeksLeft} week${weeksLeft !== 1 ? "s" : ""}`);
    if (remainingDays > 0)
      formattedTime.push(
        `${remainingDays} day${remainingDays !== 1 ? "s" : ""}`
      );

    setYears(yearsLeft);
    setMonths(monthsLeft);
    setWeeks(weeksLeft);
    setDays(remainingDays);

    setRemainingTime(formattedTime.join(", "));
  }, [date]);

  return (
    <>
      {!card ? (
        <CountdownText>{remainingTime} left until the wedding</CountdownText>
      ) : (
        <div className='flex flex-wrap justify-center gap-4'>
          <div className='flex gap-3 max-lg:w-[250px]'>
            <TimeCard time={years} text='Years' />
            <TimeCard time={months} text='Months' />
          </div>
          <div className='flex gap-3 max-lg:w-[250px]'>
            <TimeCard time={weeks} text='Weeks' />
            <TimeCard time={days} text='Days' />
          </div>
        </div>
      )}
    </>
  );
};

export default CountdownTimer;
