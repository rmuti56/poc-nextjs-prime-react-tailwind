import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export interface PagePropWithParams {
  params: {
    lng: LanguageKey;
  };
}

export interface LanguageParams extends Params {
  lng: LanguageKey;
}

export type LanguageKey = "en" | "th";

export type NamespaceKey = "common";
