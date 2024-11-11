"use client";

import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { useDocumentMetadata } from "../../../../hooks/use-document-metadata";
import { RootErrorMetadataInput } from "./types";

export function RootErrorMetadata({}: RootErrorMetadataInput) {
  const { _ } = useLingui();

  useDocumentMetadata({
    description: _(msg({ message: "next-example" })),
    title: _(msg({ message: "Error • next-example" })),
  });

  return null;
}