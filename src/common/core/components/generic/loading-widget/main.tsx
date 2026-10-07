import { Center, Loader } from "@mantine/core";

import type { LoadingWidgetInput } from "./types";

export function LoadingWidget({ type }: LoadingWidgetInput) {
  return (
    <Center h="100%">
      <Loader type={type} />
    </Center>
  );
}
