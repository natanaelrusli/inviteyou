import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.css";

interface ImageItf {
  src: string;
  title: string;
}

interface ImageSliderItf {
  images?: ImageItf[];
}

const ImageSlider = ({ images }: ImageSliderItf) => {
  return (
    <div className='mx-6'>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className='mySwiper'
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {images?.map((image, i) => (
          <SwiperSlide key={`imageSlider-${i}`}>
            <img
              key={`imageSlider-img-${i}`}
              className='h-full w-full object-cover'
              src={image.src}
              alt={image.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
