import type {
  MantineColor,
  MantineColorShade,
  MantinePrimaryShade,
  MantineThemeColors,
} from "@mantine/core";
import type { PropsWithChildren } from "react";

export type ThemeProviderInput = PropsWithChildren<{
  colors: MantineThemeColors;
  primaryColor: MantineColor;
  primaryShade: MantineColorShade | MantinePrimaryShade;
}>;
