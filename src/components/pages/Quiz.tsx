/* eslint-disable react/display-name */
import { Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, FC } from "react";
import { CalculationCard } from "../organisms/CalculationCard";

type QuizData = {
  id: number;
  title: string;
  content: string;
  category: "addition" | "subtraction" | "multiplication" | "division";
};

const QuizData: Array<QuizData> = [
  { id: 1, title: "addition", content: "Addition at elementary school level", category: "addition" },
  { id: 2, title: "multiplication", content: "Multiplication at 2nd grade level", category: "multiplication" },
];

export const Quiz: FC = memo(() => {
  return (
    <>
      <Heading as="h1" size="2xl" textAlign="center" p={4} pt="40px">
        Question List
      </Heading>
      <Wrap p={{ base: 4, md: 10 }}>
        {QuizData.map((data) => (
          <WrapItem key={data.id} m="0 auto">
            <CalculationCard src={data.category === "addition" ? "/img/car.svg" : "/img/multiplication.png"} alt="picture" href={`/${data.category}`} title={data.title} content={data.content} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
});
