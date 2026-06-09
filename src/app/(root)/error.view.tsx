import type { ErrorViewInput } from "../types";

import { MainLayout } from "../../common/core/components/generic/main-layout";
import { ErrorWidget } from "../../isomorphic/core/components/generic/error-widget";

export function RootErrorView({ reset }: ErrorViewInput) {
  return (
    <MainLayout>
      <ErrorWidget reset={reset} />
    </MainLayout>
  );
}
