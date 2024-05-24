/* eslint-disable react/display-name */
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: FC<Props> = memo((props) => {
  const { onOpen } = props;
  return <IconButton aria-label="menu" icon={<HamburgerIcon />} size="sm" isRound={true} display={{ base: "block", md: "none" }} variant="solid" onClick={onOpen} />;
});

