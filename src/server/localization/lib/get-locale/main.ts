import type { GetLocaleInput, GetLocaleOutput } from "./types";

import { getAcceptedLocales } from "../../../../common/localization/lib/get-accepted-locales";
import { getSupportedLocale } from "../../../../common/localization/lib/get-supported-locale";

export function getLocale({ headers }: GetLocaleInput): GetLocaleOutput {
  const { locales } = getAcceptedLocales({ headers: headers });
  const { locale } = getSupportedLocale({ locales: locales });

  return { locale: locale };
}
