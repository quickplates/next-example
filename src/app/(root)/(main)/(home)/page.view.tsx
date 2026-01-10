import type { PageViewInput } from "../../../types";
import type { Schemas } from "./schemas";

import { TestWidget } from "../../../../client/test/components/test/test-widget";
import { LoadingWidget } from "../../../../common/core/components/generic/loading-widget";
import { Hydrated } from "../../../../isomorphic/generic/components/hydrated";

export async function HomePageView({}: PageViewInput<
  typeof Schemas.Path,
  typeof Schemas.Query
>) {
  return (
    <Hydrated fallback={<LoadingWidget />}>
      <TestWidget />
    </Hydrated>
  );
}
