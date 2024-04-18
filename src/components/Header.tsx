import React, { useEffect, useRef, useState } from "react";
import { modalEnterAnimation } from "../services/titleAnimationService";
import "../styles/Header.scss";
// import LanguageSelector from "../components/UI/languageSelector";
import LanguageSelector from "./UI/LanguageSelector";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [modal, setModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 1240;
  const modalRef = useRef<HTMLHeadingElement | null>(null);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showModal = () => {
    setModal(!modal);
    setTimeout(() => {
      animateModal();
    }, 100);
  };

  const animateModal = () => {
    modalEnterAnimation(modalRef, modal);
  };

  const scrollToHome = () => {
    const homeElement = document.getElementById("home") as HTMLElement;
    homeElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    const aboutElement = document.getElementById("about") as HTMLElement;
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToCases = () => {
    const casesElement = document.getElementById("cases") as HTMLElement;
    casesElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFeedback = () => {
    const feedbackElement = document.getElementById("feedback") as HTMLElement;
    feedbackElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer") as HTMLElement;
    footerElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="header">
      {modal ? (
        <div className="modal" ref={modalRef}>
          <div className="header-modal">
            <div className="header-modal__close">
              <button className="header-modal__close-btn" onClick={showModal}>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-glyphs/60/ffffff/multiply.png"
                  alt="multiply"
                />
              </button>
            </div>
            <div className="header-modal__nav">
              <div className="header-nav__item" onClick={scrollToHome}>
                {t("home")}
              </div>
              <div className="header-nav__item" onClick={scrollToAbout}>
                {t("services")}
              </div>
              <div className="header-nav__item" onClick={scrollToCases}>
                {t("cases")}
              </div>
              <div className="header-nav__item" onClick={scrollToFeedback}>
                {t("feedback")}
              </div>
              <div className="header-nav__item" onClick={scrollToFooter}>
                {t("contacts")}
              </div>
            </div>
          </div>
          <div className="header-overlay" onClick={showModal}></div>
        </div>
      ) : (
        <></>
      )}

      {isMobile ? (
        <div className="header-burger">
          <div className="header-logo__section" onClick={scrollToHome}>
            <img src="https://i.postimg.cc/sxXCsDhT/noname-logo.png" alt="" className="header-logo__img" loading="lazy" />
            <h1 className="header-logo__title">ABC Digital</h1>
          </div>


          <div className="header__language dropdown">
            <button className="dropbtn">{t("switcher")}</button>
            <div className="dropdown__content">
                <LanguageSelector i18n={i18n} />
            </div>
          </div>


          <button onClick={showModal} className="header-burger__btn">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/material-rounded/48/ffffff/menu--v1.png"
              alt="menu--v1"
              loading="lazy"
            />
          </button>
        </div>
      ) : (
        <div className="header-body">
          <div className="header-logo__section" onClick={scrollToHome}>
            <img src="https://i.postimg.cc/sxXCsDhT/noname-logo.png" alt="Logo" loading="lazy" />
            <h1>ABC Digital</h1>
          </div>
          <div className="header-nav__section">
            <div className="header-nav">
              <div className="header-nav__item" onClick={scrollToHome}>
                {t("home")}
              </div>
              <div className="header-nav__item" onClick={scrollToAbout}>
                {t("services")}
              </div>
              <div className="header-nav__item" onClick={scrollToCases}>
                {t("cases")}
              </div>
              <div className="header-nav__item" onClick={scrollToFeedback}>
                {t("feedback")}
              </div>
              <div className="header-nav__item" onClick={scrollToFooter}>
                {t("contacts")}
              </div>
            </div>
          </div>


          <div className="header__language dropdown">
            <button className="dropbtn">{t("switcher")}</button>
            <div className="dropdown__content">
                <LanguageSelector i18n={i18n} />
            </div>
          </div>


        </div>
      )}
    </div>
  );
};

export default Header;