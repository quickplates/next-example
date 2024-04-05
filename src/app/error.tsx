"use client";

import { Title } from "@mantine/core";
import { Metadata } from "next";
import { labels } from "../config/labels.ts";

export const metadata: Metadata = {
  title: labels.pages.error.title,
  description: labels.pages.error.description,
};

export type ErrorProps = Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>;

export default function Error({}: ErrorProps) {
  return <Title>{labels.pages.error.text}</Title>;
}
