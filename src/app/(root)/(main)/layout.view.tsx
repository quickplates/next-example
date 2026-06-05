import type { LayoutViewInput } from "../../types";
import type { Schemas } from "./schemas";
import type { Keys } from "./types";

import { MainLayout } from "../../../common/core/components/generic/main-layout";

export async function MainLayoutView({
  children,
}: LayoutViewInput<typeof Schemas.Path, Keys.Slots>) {
  return <MainLayout>{children}</MainLayout>;
}
