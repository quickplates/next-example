import { i18n } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { Metadata } from "next";

import { RootPageMetadata } from "../components/metadata/root/root-page-metadata";
import { RootPageView } from "../components/views/root/root-page-view";
import { getLanguage } from "../lib/get-language";
import { loadLocale } from "../lib/load-locale";
import { RootPageInput } from "./types";

export async function generateMetadata(): Promise<Metadata> {
  const { language } = getLanguage();
  await loadLocale({ i18n, language });

  return {
    description: i18n._(msg({ message: "next-example" })),
    title: i18n._(msg({ message: "next-example" })),
  };
}

export default function RootPage({}: RootPageInput) {
  return (
    <>
      <RootPageMetadata />
      <RootPageView />
    </>
  );
}
