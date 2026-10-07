import { Box } from "@mantine/core";

import type { MainLayoutInput } from "./types";

import classes from "./styles.module.css";

export function MainLayout({ children }: MainLayoutInput) {
  return <Box className={classes.box}>{children}</Box>;
}
