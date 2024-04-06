"use client";

import { Button } from "@mantine/core";
import { labels } from "../config/labels.ts";
import { useStore } from "../store";

export default function IndexPage() {
  const [color, hydrated] = useStore((state) => state.color);
  const [flipColor] = useStore((state) => state.flipColor);

  return (
    <Button
      loading={!hydrated}
      size="xl"
      color={hydrated ? color : undefined}
      onClick={hydrated ? flipColor : undefined}
    >
      {labels.pages.index.buttons.main.label}
    </Button>
  );
}
