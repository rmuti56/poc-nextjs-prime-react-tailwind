// Note: This project implement i18n following this blog
// https://locize.com/blog/next-app-dir-i18n/
import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./settings";
import { Languages, Namespaces } from "~/interfaces/i18n.interface";

const initI18next = async (lng: Languages, ns: Namespaces) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns));

  return i18nInstance;
};

export async function useTranslation(
  lng: Languages,
  ns: Namespaces = "common",
  options = { keyPrefix: "" }
) {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: i18nextInstance,
  };
}
