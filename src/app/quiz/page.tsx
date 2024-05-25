import { CalculationCard } from "@/components/organisms/CalculationCard";
import { Quiz } from "@/components/pages/Quiz";
import { HeaderLayout } from "@/components/template/HeaderLayout";
import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import type { NextPage } from "next";

const QuizPage: NextPage = () => {
  return (
    <HeaderLayout>
      <Quiz />
    </HeaderLayout>
  );
};

export default QuizPage;
