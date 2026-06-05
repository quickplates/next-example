import type { LayoutViewInput } from "../types";
import type { Schemas } from "./schemas";
import type { Keys } from "./types";

export async function RootLayoutView({
  children,
}: LayoutViewInput<typeof Schemas.Path, Keys.Slots>) {
  return children;
}
