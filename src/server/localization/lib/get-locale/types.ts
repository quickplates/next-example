import type { SupportedLocale } from "../../../../common/localization/types";

export type GetLocaleInput = {
  headers: Headers;
};

export type GetLocaleOutput = {
  locale: SupportedLocale;
};
