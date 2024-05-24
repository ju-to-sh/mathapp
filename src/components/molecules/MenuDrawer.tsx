/* eslint-disable react/display-name */
import { memo, FC } from "react";
import NextLink from "next/link";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Link } from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const { onClose, isOpen } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%">
              <Link as={NextLink} href="/">
                Home
              </Link>
            </Button>
            <Button w="100%">
              <Link as={NextLink} href="/quiz">
                Question list
              </Link>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
