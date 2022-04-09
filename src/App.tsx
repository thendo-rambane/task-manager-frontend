import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { useState } from "react";
import "./App.scss";
import Layout from "./Components/Layout";

function App() {
  const sysColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(sysColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }} withGlobalStyles>
        <Layout />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
