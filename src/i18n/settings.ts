import { LanguageKey } from "~/interfaces/i18n.interface";

export const fallbackLng = "en";
export const languages: LanguageKey[] = [fallbackLng, "th"];
export const defaultNS = "common";
export const cookieName = "i18next";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
