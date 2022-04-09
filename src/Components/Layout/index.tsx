import React, { useState } from "react";
import { AppShell, Text, useMantineTheme } from "@mantine/core";
import Navbar from "../Navbar";
import Header from "../Header";
import SideBar from "../SideBar";
import Footer from "../Footer";
import { useColorScheme } from "@mantine/hooks";

export default function AppShellDemo() {
  const colorScheme = useColorScheme();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={<Navbar opened={opened} />}
      aside={<SideBar />}
      footer={<Footer />}
      header={<Header opened={opened} setOpened={setOpened} />}
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}
