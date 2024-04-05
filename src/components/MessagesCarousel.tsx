import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./MessageCarousel.css";

interface MessageCardProps {
  message?: string;
  senderName?: string;
  relationship?: string;
}

const dummyMessages: MessageCardProps[] = [
  {
    message:
      "Congratulations on your wedding day! Wishing you a lifetime of love and happiness.",
    senderName: "Emily & Michael",
    relationship: "Friends of the Bride and Groom",
  },
  {
    message:
      "May your wedding day be filled with joy and your love continue to grow stronger with each passing day.",
    senderName: "Sarah & David",
    relationship: "Family Friends",
  },
  {
    message:
      "Warmest congratulations on your marriage! Here's to the beginning of a beautiful journey together.",
    senderName: "Jessica & Adam",
    relationship: "Cousins",
  },
  {
    message:
      "Wishing you both a lifetime of love and laughter. Congratulations on finding your forever love!",
    senderName: "Mark & Olivia",
    relationship: "High School Sweethearts",
  },
  {
    message:
      "On this special day, may your love for each other continue to grow stronger. Congratulations!",
    senderName: "Ryan & Natalie",
    relationship: "Neighbors",
  },
];

const MessageCard = ({ ...props }: MessageCardProps) => {
  return (
    <div className='p-4 bg-transparent h-full w-full flex flex-col text-sm rounded-xl gap-3 cursor-grab'>
      <div className='font-montserrat font-normal text-xl'>
        {props.message || "No Message"}
      </div>
      <div className='flex flex-col gap-1 border-t border-primary opacity-30-brown pt-2 items-start'>
        <div className='text-lg'>{props.senderName || "Anonymous"}</div>
        <div className='font-light text-sm'>
          {props.relationship || "someone important"}
        </div>
      </div>
    </div>
  );
};

const MessagesCarousel = ({ delay }: { delay?: number }) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className='p-8 bg-white border-2 border-primary rounded-xl'>
      <h1 className='font-alexBrush text-[65px] text-primary text-center'>
        Messages
      </h1>
      <div className='border-t border-primary w-5/12 m-auto'></div>
      <Swiper
        speed={1000}
        autoplay={{
          delay: delay || 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={40}
        loop={true}
        slidesPerView={isMobile ? 1 : 2}
        className='mySwiper h-fit w-full my-5 pb-5'
      >
        {dummyMessages.map((data) => (
          <SwiperSlide className='gap-3'>
            <MessageCard
              message={data.message}
              senderName={data.senderName}
              relationship={data.relationship}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MessagesCarousel;
