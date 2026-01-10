import { trim } from "es-toolkit/string";

import type { CreateUrlInput, CreateUrlOutput } from "./types";

export function createUrl({
  host,
  path,
  port,
  scheme,
}: CreateUrlInput): CreateUrlOutput {
  const trimmedPath = path ? trim(path, "/") : path;
  return `${scheme}://${host}${port ? `:${port}` : ""}${trimmedPath ? `/${trimmedPath}` : ""}`;
}
