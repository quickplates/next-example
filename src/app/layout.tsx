import { i18n } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { ColorSchemeScript } from "@mantine/core";
import { Metadata } from "next";

import { PageLayout } from "../components/layouts/page-layout";
import { colorSchemeStorageKey, defaultColorScheme } from "../constants";
import { getLanguage } from "../lib/get-language";
import { loadLocale } from "../lib/load-locale";
import { I18nProvider } from "../providers/i18n-provider";
import { ThemeProvider } from "../providers/theme-provider";
import { RootLayoutInput } from "./types";

export async function generateMetadata(): Promise<Metadata> {
  const { language } = getLanguage();
  await loadLocale({ i18n, language });

  return {
    description: i18n._(msg({ message: "next-example" })),
    title: i18n._(msg({ message: "next-example" })),
  };
}

export default async function RootLayout({ children }: RootLayoutInput) {
  const { language } = getLanguage();
  const { locale } = await loadLocale({ i18n, language });

  return (
    <html lang={locale}>
      <head>
        <link href="/favicon.svg?v=1" rel="shortcut icon" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          name="viewport"
        />
        <ColorSchemeScript
          defaultColorScheme={defaultColorScheme}
          localStorageKey={colorSchemeStorageKey}
        />
      </head>
      <body>
        <I18nProvider>
          <ThemeProvider>
            <PageLayout>{children}</PageLayout>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
