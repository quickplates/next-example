import type { NotFoundViewInput } from "../types";

import { MainLayout } from "../../common/core/components/generic/main-layout";
import { NotFoundWidget } from "../../isomorphic/core/components/generic/not-found-widget";

export async function RootNotFoundView({}: NotFoundViewInput) {
  return (
    <MainLayout>
      <NotFoundWidget />
    </MainLayout>
  );
}
