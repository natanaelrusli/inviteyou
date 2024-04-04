import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./MessageCarousel.css";

const MessageCard = () => {
  return (
    <div className='p-4 bg-transparent h-full w-full flex flex-col text-sm rounded-xl gap-3'>
      <div className='font-montserrat font-normal text-xl'>
        Congratulations on your wedding!
      </div>
      <div className='flex gap-2 border-t border-soft-brown pt-2 items-center'>
        <div className='text-lg'>Nael & Evelyn</div>
        <div>-</div>
        <div className='font-light text-sm'>Apa ya</div>
      </div>
    </div>
  );
};

const MessagesCarousel = ({ delay }: { delay: number }) => {
  return (
    <div className='p-8'>
      <h1 className='font-alexBrush text-[65px] text-soft-brown text-center'>
        Messages
      </h1>
      <Swiper
        speed={1000}
        autoplay={{
          delay: delay || 6000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        pagination={true}
        className='mySwiper w-[500px] h-fit my-5'
      >
        <SwiperSlide className='gap-3'>
          <MessageCard />
          <MessageCard />
        </SwiperSlide>
        <SwiperSlide className='gap-3'>
          <MessageCard />
          <MessageCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MessagesCarousel;
