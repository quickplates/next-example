import type { GetUserInput, GetUserOutput } from "./types";

import { Schemas } from "./schemas";

export async function getUser({
  headers,
}: GetUserInput): Promise<GetUserOutput> {
  const id = await Schemas.Id.safeParseAsync(headers.get("X-User-ID"));

  const user = id.success ? { id: id.data } : null;

  return { user: user };
}
