import type { MantineColorSchemeManager } from "@mantine/core";

export class DummyColorSchemeManager implements MantineColorSchemeManager {
  clear() {
    return;
  }

  get() {
    return "auto" as const;
  }

  set() {
    return;
  }

  subscribe() {
    return;
  }

  unsubscribe() {
    return;
  }
}
