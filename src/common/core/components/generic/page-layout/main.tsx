import { Box } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import type { PageLayoutInput } from "./types";

import classes from "./styles.module.css";

export function PageLayout({ children }: PageLayoutInput) {
  return (
    <>
      <Notifications position="bottom-right" />
      <Box className={classes.box}>{children}</Box>
    </>
  );
}
