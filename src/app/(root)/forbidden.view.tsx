import type { ForbiddenViewInput } from "../types";

import { MainLayout } from "../../common/core/components/generic/main-layout";
import { ForbiddenWidget } from "../../isomorphic/access/components/forbidden-widget";

export async function RootForbiddenView({}: ForbiddenViewInput) {
  return (
    <MainLayout>
      <ForbiddenWidget />
    </MainLayout>
  );
}
