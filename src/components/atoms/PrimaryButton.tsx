/* eslint-disable react/display-name */
import NextLink from "next/link";
import { Button, Link } from "@chakra-ui/react";
import { memo, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Button colorScheme="blue" size={{ base: "sm", md: "md" }} m={4}>
      <Link as={NextLink} href="/quiz" _hover={{ textDecoration: "none" }}>
        {children}
      </Link>
    </Button>
  );
});
