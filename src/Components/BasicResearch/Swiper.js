import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";

function Carousel({ slides }) {
  slides = slides || []; // Defaulting slides to an empty array if undefined

  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination]}
      navigation={{
        prevEl: ".button-prev",
        nextEl: ".button-next",
      }}
      pagination={{
        clickable: true,
      }}
      speed={1000}
      slidesPerView={"auto"}
      centeredSlides
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      initialSlide={1} // Set default current slide to the second slide (index starts from 0)
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="slide-inner">
          <img className="collection-swiper-image" src={slide} alt="" />
        </SwiperSlide>
      ))}
      <div className="button-prev">
        <img src={arrowLeft} alt="Left" />
      </div>
      <div className="button-next">
        <img src={arrowRight} alt="Right" />
      </div>
    </Swiper>
  );
}

export default Carousel;
