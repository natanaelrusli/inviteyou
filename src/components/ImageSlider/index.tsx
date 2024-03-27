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
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className='mySwiper'
      >
        {images?.map((image) => (
          <SwiperSlide>
            <img
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
