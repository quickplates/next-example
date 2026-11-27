import type { LocaleMiddlewareOutputContext } from "./types";

import { getLocale } from "../../../../localization/lib/get-locale";
import { headersMiddleware } from "../headers";
import { isExecuted } from "./utils";

export const localeMiddleware = headersMiddleware.concat(
  async ({ context, next }) => {
    if (isExecuted(context))
      return next({
        context: {
          localeMiddleware: {
            executed: context.localeMiddleware.executed,
            locale: context.localeMiddleware.locale,
          },
        } satisfies LocaleMiddlewareOutputContext,
      });

    const headers = context.headersMiddleware.headers;

    const { locale } = getLocale({ headers: headers });

    return next({
      context: {
        localeMiddleware: {
          executed: true,
          locale: locale,
        },
      } satisfies LocaleMiddlewareOutputContext,
    });
  },
);
