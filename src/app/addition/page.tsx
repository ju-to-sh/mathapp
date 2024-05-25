import { HeaderLayout } from "@/components/template/HeaderLayout";
import { Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const AdditionPage: NextPage = () => {
  return (
    <HeaderLayout>
      <Box height='100vh' alignContent='center'>
        <Text textAlign="center" fontSize='4xl'>The issue is not displayed because the content is being created</Text>
      </Box>
    </HeaderLayout>
  );
};

export default AdditionPage;
