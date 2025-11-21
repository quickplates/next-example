import { omitBy } from "es-toolkit";

import type { CreateViewportInput, CreateViewportOutput } from "./types";

export async function createViewport({
  colorScheme,
  themeColor,
  viewportAttributes,
}: CreateViewportInput): Promise<CreateViewportOutput> {
  return omitBy(
    {
      colorScheme: colorScheme,
      themeColor: themeColor,
      ...viewportAttributes,
    },
    (value) => value === undefined,
  );
}
