import { Box } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import type { MainLayoutInput } from "./types";

import classes from "./styles.module.css";

export function MainLayout({ children }: MainLayoutInput) {
  return (
    <>
      <Notifications position="bottom-right" />
      <Box className={classes.outer}>
        <Box className={classes.inner}>{children}</Box>
      </Box>
    </>
  );
}
