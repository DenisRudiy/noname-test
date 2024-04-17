import { useEffect, useRef, useState } from "react";
import "../styles/Header.scss";
import { modalEnterAnimation } from "../services/titleAnimationService";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 1240;
  const modalRef = useRef<HTMLHeadingElement | null>(null);

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
    <div className="Header">
      {modal ? (
        <div className="Modal" ref={modalRef}>
          <div className="Header_modal">
            <div className="Header_modal_close">
              <button className="Header_modal_close_btn" onClick={showModal}>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-glyphs/60/ffffff/multiply.png"
                  alt="multiply"
                />
              </button>
            </div>
            <div className="Header_modal_btn">
              <div className="Header_nav_item" onClick={scrollToHome}>
                Home
              </div>
              <div className="Header_nav_item" onClick={scrollToAbout}>
                Services
              </div>
              <div className="Header_nav_item" onClick={scrollToCases}>
                Cases
              </div>
              <div className="Header_nav_item" onClick={scrollToFeedback}>
                Feedback
              </div>
              <div className="Header_nav_item" onClick={scrollToFooter}>
                Contacts
              </div>
            </div>
          </div>
          <div className="Header_overlay"></div>
        </div>
      ) : (
        <></>
      )}

      {isMobile ? (
        <div className="Header_burger">
          <div className="Header_logo_section" onClick={scrollToHome}>
            <img src="https://i.postimg.cc/sxXCsDhT/noname-logo.png" alt="" className="Header_logo" loading="lazy" />
            <h1 className="Header_logo_title">ABC Digital</h1>
          </div>
          <button onClick={showModal} className="Header_burger_btn">
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
        <div className="Header_body">
          <div className="Header_logo_section">
            <img src="https://i.postimg.cc/sxXCsDhT/noname-logo.png" alt="" className="Header_logo" loading="lazy" />
            <h1 className="Header_logo_title">ABC Digital</h1>
          </div>
          <div className="Header_nav_section">
            <div className="Header_nav">
              <div className="Header_nav_item" onClick={scrollToHome}>
                Home
              </div>
              <div className="Header_nav_item" onClick={scrollToAbout}>
                Services
              </div>
              <div className="Header_nav_item" onClick={scrollToCases}>
                Cases
              </div>
              <div className="Header_nav_item" onClick={scrollToFeedback}>
                Feedback
              </div>
              <div className="Header_nav_item" onClick={scrollToFooter}>
                Contacts
              </div>
            </div>
          </div>
          <div className="Header_contacts_section">
            <div className="Header_contacts">
              <button className="Header_feedback --shine">Contact Us</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;





// import { useEffect, useRef, useState } from "react";
// import "../styles/Header.scss";
// import { modalEnterAnimation } from "../services/titleAnimationService";

// const Header = () => {
//   const [modal, setModal] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const isMobile = windowWidth <= 1240;
//   const modalRef = useRef<HTMLHeadingElement | null>(null);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const showModal = () => {
//     setModal(!modal);
//     setTimeout(() => {
//       animateModal();
//     }, 100);
//   };

//   const animateModal = () => {
//     modalEnterAnimation(modalRef, modal);
//   };

//   const scrollToHome = () => {
//     const homeElement = document.getElementById("home") as HTMLElement;
//     homeElement.scrollIntoView({ behavior: "smooth" });
//   };
//   const scrollToAbout = () => {
//     const aboutElement = document.getElementById("about") as HTMLElement;
//     aboutElement.scrollIntoView({ behavior: "smooth" });
//   };
//   const scrollToCases = () => {
//     const casesElement = document.getElementById("cases") as HTMLElement;
//     casesElement.scrollIntoView({ behavior: "smooth" });
//   };
//   const scrollToFeedback = () => {
//     const feedbackElement = document.getElementById("feedback") as HTMLElement;
//     feedbackElement.scrollIntoView({ behavior: "smooth" });
//   };
//   const scrollToFooter = () => {
//     const footerElement = document.getElementById("footer") as HTMLElement;
//     footerElement.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="header">
//       {modal ? (
//         <div className="Modal" ref={modalRef}>
//           <div className="header-modal">
//             <div className="header-modal__close">
//               <button className="header-modal__close-btn" onClick={showModal}>
//                 <img
//                   width="30"
//                   height="30"
//                   src="https://img.icons8.com/ios-glyphs/60/ffffff/multiply.png"
//                   alt="multiply"
//                 />
//               </button>
//             </div>
//             <div className="header-modal__nav">
//               <div className="header-nav__item" onClick={scrollToHome}>
//                 Home
//               </div>
//               <div className="header-nav__item" onClick={scrollToAbout}>
//                 Services
//               </div>
//               <div className="header-nav__item" onClick={scrollToCases}>
//                 Cases
//               </div>
//               <div className="header-nav__item" onClick={scrollToFeedback}>
//                 Feedback
//               </div>
//               <div className="header-nav__item" onClick={scrollToFooter}>
//                 Contacts
//               </div>
//             </div>
//           </div>
//           <div className="header-overlay"></div>
//         </div>
//       ) : (
//         <></>
//       )}

//       {isMobile ? (
//         <div className="header-burger">
//           <div className="header-logo__section">
//             <img src="https://i.postimg.cc/sxXCsDhT/noname-logo.png" alt="" className="header-logo__img" loading="lazy" />
//             <h1 className="header-logo__title">ABC Digital</h1>
//           </div>
//           <button onClick={showModal} className="header-burger__btn">
//             <img
//               width="25"
//               height="25"
//               src="https://img.icons8.com/material-rounded/48/ffffff/menu--v1.png"
//               alt="menu--v1"
//               loading="lazy"
//             />
//           </button>
//         </div>
//       ) : (
//         <div className="header-body">
//           <div className="header-logo__section">
//             <img src="https://i.postimg.cc/sxXCsDhT/noname-logo.png" alt="" className="header-logo__img" loading="lazy" />
//             <h1 className="header-logo__title">ABC Digital</h1>
//           </div>
//           <div className="header-nav__section">
//             <div className="header-nav">
//               <div className="header-nav__item_web" onClick={scrollToHome}>
//                 Home
//               </div>
//               <div className="header-nav__item_web" onClick={scrollToAbout}>
//                 Services
//               </div>
//               <div className="header-nav__item_web" onClick={scrollToCases}>
//                 Cases
//               </div>
//               <div className="header-nav__item_web" onClick={scrollToFeedback}>
//                 Feedback
//               </div>
//               <div className="header-nav__item_web" onClick={scrollToFooter}>
//                 Contacts
//               </div>
//             </div>
//           </div>
//           <div className="header-contacts">
//             <div className="header-contacts__btn">
//               <button className="header-feedback__shine">Contact Us</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;