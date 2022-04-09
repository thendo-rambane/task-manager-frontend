import { Footer as MantineFooter } from "@mantine/core";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <MantineFooter height={60} p="md">
      Application footer
    </MantineFooter>
  );
};
export default Footer;
