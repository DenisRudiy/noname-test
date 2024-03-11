import { useEffect, useRef } from "react";
import "../../styles/Feedback.scss";
import {
  handleFade,
  handleSlide,
  handleSlideSmallLeftCase,
  handleSlideSmallRightCase,
} from "../../services/titleAnimationService";

const CompaniesFeedback = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const c1Ref = useRef<HTMLHeadingElement | null>(null);
  const c2Ref = useRef<HTMLHeadingElement | null>(null);
  const c3Ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const handleScrollEvent = () => {
      handleSlide(titleRef);
      handleSlideSmallRightCase(c1Ref);
      handleFade(c2Ref);
      handleSlideSmallLeftCase(c3Ref);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div className="CompaniesFeedback">
      <h1 className="CompaniesFeedback_title" ref={titleRef}>
        Що кажуть наші клієнти
      </h1>
      <div className="CompaniesFeedback_body">
        <div className="CompaniesFeedback_card c_1" ref={c1Ref}>
          <div className="CompaniesFeedback_company">
            <img src="https://i.postimg.cc/L4Pc7bz9/logo-1.png" alt="" />
            <div className="CompaniesFeedback_company_data">
              <h1>Ubisoft</h1>
              <h2>Top game development studio</h2>
            </div>
          </div>
          <span className="CompaniesFeedback_underline"></span>
          <p className="CompaniesFeedback_data">
            Name розробила захоплюючий мобільний додаток для гри, який надає гравцям можливість насолоджуватися
            захоплюючим геймплеєм та отримувати нові враження. Додаток вдало збалансував гру міжнапівперід, зменшивши
            потребу в зайвих зверненнях гравців до служби підтримки.
          </p>
          <span className="CompaniesFeedback_underline"></span>
          <div className="CompaniesFeedback_user">
            <button className="CompaniesFeedback_user_btn --shine">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/metro/52/05010d/external-link.png"
                alt="external-link"
              />
            </button>
            <div className="CompaniesFeedback_user_data">
              <h1>Serhii Mohyla</h1>
              <h2>Project Manager, ARMA MOTORS</h2>
            </div>
          </div>
        </div>
        <div className="CompaniesFeedback_card c_2" ref={c2Ref}>
          <div className="CompaniesFeedback_company">
            <img src="https://i.postimg.cc/d1kbJWp9/logo-4.png" alt="" />
            <div className="CompaniesFeedback_company_data">
              <h1>BREVITY.</h1>
              <h2>Top web development studio</h2>
            </div>
          </div>
          <span className="CompaniesFeedback_underline"></span>
          <p className="CompaniesFeedback_data">
            Name розробила захоплюючий мобільний додаток для гри, який надає гравцям можливість насолоджуватися
            захоплюючим геймплеєм та отримувати нові враження. Додаток вдало збалансував гру міжнапівперід, зменшивши
            потребу в зайвих зверненнях гравців до служби підтримки.
          </p>
          <span className="CompaniesFeedback_underline"></span>
          <div className="CompaniesFeedback_user">
            <button className="CompaniesFeedback_user_btn --shine">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/metro/52/05010d/external-link.png"
                alt="external-link"
              />
            </button>
            <div className="CompaniesFeedback_user_data">
              <h1>Igor Volikov</h1>
              <h2>Technical Director, Network of service stations Dalnoboy</h2>
            </div>
          </div>
        </div>
        <div className="CompaniesFeedback_card c_3" ref={c3Ref}>
          <div className="CompaniesFeedback_company">
            <img src="https://i.postimg.cc/rFwSzKqK/logo-7.png" alt="" />
            <div className="CompaniesFeedback_company_data">
              <h1>Fiverr</h1>
              <h2>Top freelance marketplace</h2>
            </div>
          </div>
          <span className="CompaniesFeedback_underline"></span>
          <p className="CompaniesFeedback_data">
            Name розробила захоплюючий мобільний додаток для гри, який надає гравцям можливість насолоджуватися
            захоплюючим геймплеєм та отримувати нові враження. Додаток вдало збалансував гру міжнапівперід, зменшивши
            потребу в зайвих зверненнях гравців до служби підтримки.
          </p>
          <span className="CompaniesFeedback_underline"></span>
          <div className="CompaniesFeedback_user">
            <button className="CompaniesFeedback_user_btn --shine">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/metro/52/05010d/external-link.png"
                alt="external-link"
              />
            </button>
            <div className="CompaniesFeedback_user_data">
              <h1>Kseniia Lyskina</h1>
              <h2>CEO&Owner</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesFeedback;