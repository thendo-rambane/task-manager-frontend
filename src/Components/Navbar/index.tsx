import { Navbar as MantineNavbar, Text } from "@mantine/core";
import React, { useState } from "react";

type Props = { opened: boolean };

function Navbar(props: Props) {
  return (
    <MantineNavbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!props.opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Text>Application navbar</Text>
    </MantineNavbar>
  );
}

export default Navbar;
