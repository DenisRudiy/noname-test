import "../../styles/CasesCarousel.scss";
import "../../styles/Adaptation.scss";
import { carouselData } from "../../services/CarouselDataService";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CasesSlider = () => {
  return (
    <div className="carousel">
      <Swiper
        effect={"coverflow"}
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        speed={300}
        freeMode={false}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
      >
        {carouselData.map((item, index) => (
          <SwiperSlide
            className="carousel_item"
            style={{ backgroundImage: `url(${item.image})` }}
            key={index}
          ></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CasesSlider;
