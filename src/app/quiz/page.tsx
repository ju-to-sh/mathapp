import { Quiz } from "@/components/pages/Quiz";
import { HeaderLayout } from "@/components/template/HeaderLayout";
import type { NextPage } from "next";

const QuizPage: NextPage = () => {
  return (
    <HeaderLayout>
      <Quiz />
    </HeaderLayout>
  );
};

export default QuizPage;
