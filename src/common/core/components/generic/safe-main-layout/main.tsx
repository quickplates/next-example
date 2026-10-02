import type { SafeMainLayoutInput } from "./types";

import classes from "./styles.module.css";

export function SafeMainLayout({ children }: SafeMainLayoutInput) {
  return <div className={classes.box}>{children}</div>;
}
