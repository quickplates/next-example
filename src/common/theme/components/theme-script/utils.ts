export function script() {
  const scheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  document.documentElement.setAttribute("data-mantine-color-scheme", scheme);
}
