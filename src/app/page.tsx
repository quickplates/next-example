"use client";

import { Button } from "@mantine/core";
import { useCallback } from "react";
import { helloWorld } from "../actions";
import { labels } from "../config/labels";
import { useToasts } from "../hooks";
import { useStore } from "../store";

export default function IndexPage() {
  const [color, hydrated] = useStore((state) => state.color);
  const [flipColor] = useStore((state) => state.flipColor);

  const { success } = useToasts();

  const onClick = useCallback(async () => {
    success(await helloWorld());
    flipColor();
  }, [success, flipColor]);

  return (
    <Button
      loading={!hydrated}
      size="xl"
      color={hydrated ? color : undefined}
      onClick={hydrated ? onClick : undefined}
    >
      {labels.pages.index.buttons.main.label}
    </Button>
  );
}
