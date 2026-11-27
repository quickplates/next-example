import type { SafePageLayoutInput } from "./types";

import classes from "./styles.module.css";

export function SafePageLayout({ children }: SafePageLayoutInput) {
  return <div className={classes.box}>{children}</div>;
}
