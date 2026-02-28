import type { ThemeScriptInput } from "./types";

import { script } from "./utils";

export function ThemeScript({}: ThemeScriptInput) {
  return <script id="theme-script">{`(${script.toString()})();`}</script>;
}
