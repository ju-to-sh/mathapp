/* eslint-disable react/display-name */
"use client";
import NextLink from "next/link";
import { Box, Link, useDisclosure } from "@chakra-ui/react";
import { Flex, Heading } from "@chakra-ui/react";
import { memo, FC } from "react";
import { MenuIconButton } from "@/components/atoms/MenuIconButton";
import { MenuDrawer } from "@/components/molecules/MenuDrawer";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex as="nav" bg="blue.500" color="gray.50" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
        <Heading as="h1" fontSize={{ base: "md", md: "lg", lg: "xl" }} pr={8}>
          Math App
        </Heading>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
          <Box pr={4}>
            <Link as={NextLink} href="/quiz">
              Question list
            </Link>
          </Box>
          <Link as={NextLink} href="/">
            Home
          </Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
});
