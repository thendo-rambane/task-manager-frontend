import {
  Burger,
  Header as MantineHeader,
  MediaQuery,
  useMantineTheme,
  Text,
} from "@mantine/core";
import React from "react";

type Props = { opened: boolean; setOpened: (value: boolean) => void };

function Header({ opened, setOpened }: Props) {
  const theme = useMantineTheme();
  return (
    <MantineHeader height={70} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Text>Application header</Text>
      </div>
    </MantineHeader>
  );
}

export default Header;
