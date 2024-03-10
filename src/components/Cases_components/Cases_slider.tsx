import "../../styles/CasesCarousel.scss";
import { useEffect, useRef } from "react";
import { activateSlide, getSlideIndex, nextSlide, prevSlide } from "../../services/CarouselService";
import { handleScroll } from "../../services/titleAnimationService";
import { carouselData } from "../../services/CarouselDataService";

const CasesSlider = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  let listRef = useRef<HTMLUListElement | null>(null);

  const handleSlideClick = (e: any) => {
    const max = window.matchMedia("screen and (max-width: 600px)").matches ? 5 : 8;

    const slide = e.target.closest(".carousel__item") as any;
    const index = slide ? getSlideIndex(slide) : -1;
    if (index < 3 || index > max) return;
    if (index === max) nextSlide(listRef.current);
    if (index === 3) prevSlide(listRef.current);

    activateSlide(slide);
  };

  useEffect(() => {
    const handleScrollEvent = () => handleScroll(titleRef);
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div className="CasesSlider">
      <h1 className="CasesSlider_title" ref={titleRef}>
        Наші роботи
      </h1>
      <div className="carousel">
        <ul className="carousel__list" onClick={handleSlideClick} ref={listRef}>
          {carouselData.map((item, index) => (
            <li className="carousel__item" tabIndex={index} key={index}>
              <div className="carousel__box">
                <div className="carousel__image">
                  <img src={item.image} width="480" height="720" alt="" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CasesSlider;