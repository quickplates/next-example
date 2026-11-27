import type { PageViewInput } from "../../../types";
import type { Schemas } from "./schemas";

import { ExampleWidget } from "../../../../client/example/components/example-widget";
import { LoadingWidget } from "../../../../common/core/components/generic/loading-widget";
import { Hydrated } from "../../../../isomorphic/generic/components/hydrated";

export async function ExamplePageView({}: PageViewInput<
  typeof Schemas.Path,
  typeof Schemas.Query
>) {
  return (
    <Hydrated fallback={<LoadingWidget />}>
      <ExampleWidget />
    </Hydrated>
  );
}
