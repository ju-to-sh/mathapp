import { CalculationCard } from "@/components/organisms/CalculationCard";
import { Quiz } from "@/components/pages/Quiz";
import { HeaderLayout } from "@/components/template/HeaderLayout";
import type { NextPage } from "next";

const QuizPage: NextPage = () => {
  return (
    <HeaderLayout>
      <Quiz />
      <CalculationCard src="/img/car.svg" alt="足し算の写真" href="/multiplication" />
    </HeaderLayout>

  );
};

export default QuizPage
