import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ImageSliderItf } from "../../types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface AutoplaySliderProps extends ImageSliderItf {
  delay?: number;
  pagination?: boolean;
}

const index = ({ images, delay, pagination }: AutoplaySliderProps) => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: delay || 2500,
          disableOnInteraction: false,
        }}
        className='rounded-lg w-[300px] h-[443px]'
        pagination={pagination || false}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {images?.map((image) => (
          <SwiperSlide
            style={{
              backgroundColor: "transparent",
            }}
            className='overflow-hidden w-full'
          >
            <img src={image.src} alt={image.title} className='h-full w-full' />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default index;
