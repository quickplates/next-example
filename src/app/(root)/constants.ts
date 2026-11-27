import { DEFAULT_THEME } from "@mantine/core";

export const constants = {
  colors: {
    all: DEFAULT_THEME.colors,
    primary: {
      name: DEFAULT_THEME.primaryColor,
      shade: DEFAULT_THEME.primaryShade,
    },
  },
} as const;
