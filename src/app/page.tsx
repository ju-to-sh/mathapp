import type { NextPage } from "next";
import NextLink from "next/link";
import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { HeaderLayout } from "@/components/template/HeaderLayout";

const Home: NextPage = () => {
  return (
    <HeaderLayout>
      <Flex align="center" justify="center" height="100vh" textAlign="center">
        <Box bg="white" w={{ base: "md", md: "lg" }} pb={4} borderRadius="md">
          <Heading as="h1" size={{ base: "xl", md: "2xl" }} textAlign="center" p={4}>
            Math App
          </Heading>
          <Text fontSize={{ base: "md", md: "xl" }} pl={8} pr={8} textAlign="left">
            This app is a math app aimed at elementary school students. Gradually level up and master addition, subtraction, multiplication and division.
          </Text>
          <Button colorScheme="blue" size={{ base: "sm", md: "md" }} m={4}>
            <Link as={NextLink} href="/quiz" _hover={{ textDecoration: "none" }}>
              Let&apos;s try
            </Link>
          </Button>
        </Box>
      </Flex>
    </HeaderLayout>
  );
};

export default Home;
