// import React from "react";
// import { changeLanguage } from "i18next";
// import { useTranslation } from "react-i18next";
// import './LanguageSelector.scss'

// const languages = [
//     {code: "en", lang: "English"},
//     {code: "uk", lang: "Українська"}
// ];

// const LanguageSelector = () => {
//     const {i18n} = useTranslation();
//     const changeLanguage = (lng) => {
//         i18n.changeLanguage(lng);
//     };

//     const {t} = useTranslation()

//     return (
//         <div className="header__btn dropdown">
//             {languages.map((lng) => {
//                 return (
//                     <button 
//                         className={lng.code === i18n.language ? "selected" : ""} 
//                         key={lng.code} 
//                         onClick={() => changeLanguage(lng.code)}
//                     >
//                         {lng.lang}
//                     </button>
//                 )
//             })}
//         </div>
//     )
// }

// export default LanguageSelector;



// import React from "react";
// import { useTranslation } from "react-i18next";
// import { changeLanguage } from "i18next";
// import "./LanguageSelector.scss";

// interface Language {
//   code: string;
//   lang: string;
// }

// const languages: Language[] = [
//   { code: "en", lang: "English" },
//   { code: "uk", lang: "Українська" },
// ];

// const LanguageSelector: React.FC = () => {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lng: string) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div className="header__btn dropdown">
//       {languages.map((lng) => (
//         <button
//           className={lng.code === i18n.language ? "selected" : ""}
//           key={lng.code}
//           onClick={() => changeLanguage(lng.code)}
//         >
//           {lng.lang}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default LanguageSelector;





import React from "react";
import { useTranslation } from "react-i18next";
import { i18n } from "i18next";
import "./LanguageSelector.scss";

interface LanguageSelectorProps {
  i18n: i18n;
}

interface Language {
  code: string;
  lang: string;
}

const languages: Language[] = [
  { code: "en", lang: "English" },
  { code: "uk", lang: "Українська" },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ i18n }) => {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="header__btn dropdown">
      {languages.map((lng) => (
        <button
          className={lng.code === i18n.language ? "selected" : ""}
          key={lng.code}
          onClick={() => changeLanguage(lng.code)}
        >
          {lng.lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;