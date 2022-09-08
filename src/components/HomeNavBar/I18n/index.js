import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import TranslationEn from "./translatonEn.json";
import TranslationKo from "./translationKo.json";

const resource = {
  en: {
    translations: TranslationEn,
  },
  ko: {
    translations: TranslationKo,
  },
};
const I18nextFunc = () => {
  i18next.use(initReactI18next).init({
    resources: resource,

    // 초기 설정 언어
    lng: "ko",
    fallbackLng: "ko",
    debug: true,
    defaultNS: "translations",
    ns: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });
};
export default I18nextFunc;
