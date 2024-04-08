import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./MessageCarousel.css";
import { useEffect, useState } from "react";
import { messageData } from "../data/message";

interface MessageCardProps {
  message?: string;
  senderName?: string;
}

const MessageCard = ({ ...props }: MessageCardProps) => {
  return (
    <div className='p-4 bg-transparent h-full w-full flex flex-col text-sm rounded-xl gap-3 cursor-grab'>
      <div className='font-montserrat font-normal text-xl'>
        {props.message || "No Message"}
      </div>
      <div className='flex flex-col gap-1 border-t border-primary opacity-30-brown pt-2 items-start'>
        <div className='text-lg'>{props.senderName || "Anonymous"}</div>
      </div>
    </div>
  );
};

const MessagesCarousel = ({ delay }: { delay?: number }) => {
  const isMobile = window.innerWidth <= 768;
  const [messages, setMessages] = useState<messageData[]>();

  useEffect(() => {
    fetch("http://localhost:3000/message")
      .then((res) => {
        return res.json();
      })
      .then((data: messageData[]) => {
        setMessages(data);
      });
  }, []);

  return (
    <div className='p-8 bg-white border-2 border-primary rounded-xl'>
      <h1 className='font-alexBrush text-[65px] text-primary text-center max-lg:text-[50px]'>
        Messages
      </h1>
      <div className='border-t border-primary w-5/12 m-auto'></div>
      <Swiper
        speed={1000}
        autoplay={{
          delay: delay ? delay : 6000,
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
        {messages?.length === 0 && (
          <h1 className='text-center text-xl font-semibold text-soft-brown'>
            No Messages
          </h1>
        )}
        {messages?.map(
          (data, i) =>
            data.is_approved && (
              <SwiperSlide key={`messages-${data.id}-${i}`} className='gap-3'>
                <MessageCard message={data.message} senderName={data.name} />
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  );
};

export default MessagesCarousel;
