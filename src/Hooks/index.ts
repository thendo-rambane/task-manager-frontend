import { useEffect, useState } from "react";

export default function useTheme() {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setDarkTheme] = useState(getCurrentTheme());
  const queryListener = (event: MediaQueryListEvent) => {
    setDarkTheme(event.matches);
  };

  useEffect(() => {
    const darkThemeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkThemeMediaQuery.addEventListener("change", queryListener);
    return () =>
      darkThemeMediaQuery.removeEventListener("change", queryListener);
  }, []);
  return [isDarkTheme, setDarkTheme];
}
