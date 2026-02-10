import { Center, Loader } from "@mantine/core";

import type { LoadingWidgetInput } from "./types";

export function LoadingWidget({}: LoadingWidgetInput) {
  return (
    <Center h="100%">
      <Loader />
    </Center>
  );
}
