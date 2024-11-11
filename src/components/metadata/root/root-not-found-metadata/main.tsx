"use client";

import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { useDocumentMetadata } from "../../../../hooks/use-document-metadata";
import { RootNotFoundMetadataInput } from "./types";

export function RootNotFoundMetadata({}: RootNotFoundMetadataInput) {
  const { _ } = useLingui();

  useDocumentMetadata({
    description: _(msg({ message: "next-example" })),
    title: _(msg({ message: "Not Found • next-example" })),
  });

  return null;
}
