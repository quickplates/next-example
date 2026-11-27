"use client";

import type { ErrorInput, ErrorMetadataUtilityInput } from "./types";

import { GlobalErrorView } from "./global-error.view";
import "./styles.css";

function getDescription({}: ErrorMetadataUtilityInput = {}) {
  return "Next.js app example ⚫";
}

function getTitle({}: ErrorMetadataUtilityInput = {}) {
  return "Error • next-example";
}

export default function GlobalError({ reset }: ErrorInput) {
  return (
    <html lang="en">
      <head>
        <title>{getTitle()}</title>
        <meta content={getDescription()} name="description" />
      </head>
      <body>
        <GlobalErrorView reset={reset} />
      </body>
    </html>
  );
}
