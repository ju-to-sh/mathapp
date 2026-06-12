"use client";

import { QuizButtons } from "@/components/molecules/QuizButtons ";
import { HeaderLayout } from "@/components/template/HeaderLayout";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Container,
  Flex,
  Heading,
  Input,
  ListItem,
  Spinner,
  UnorderedList,
  useBoolean,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useMemo, useState, type ChangeEvent } from "react";

type Question = {
  left: number;
  right: number;
};

type UserAnswers = {
  [key: string]: number | null;
};

const QUESTION_COUNT = 10;

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateQuestions = (): Question[] => {
  return Array.from({ length: QUESTION_COUNT }, () => ({
    left: getRandomNumber(1, 20),
    right: getRandomNumber(1, 20),
  }));
};

const getQuestionKey = (index: number): string => `Q${index + 1}`;

const AdditionPage: NextPage = () => {
  const [questions, setQuestions] = useState<Question[]>(() => generateQuestions());
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [missAnswers, setMissAnswers] = useState<string[]>([]);
  const [isPassed, setIsPassed] = useBoolean();
  const [hasBlankAnswer, setHasBlankAnswer] = useBoolean();
  const [hasWrongAnswer, setHasWrongAnswer] = useBoolean();

  const answerKey = useMemo(
    () =>
      questions.reduce<UserAnswers>((answers, question, index) => {
        answers[getQuestionKey(index)] = question.left + question.right;
        return answers;
      }, {}),
    [questions],
  );

  const onChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserAnswers((prev) => ({
      ...prev,
      [name]: value === "" ? null : Number(value),
    }));
  };

  const onClickJudge = () => {
    const isComplete = questions.every((_, index) => {
      const key = getQuestionKey(index);
      return userAnswers[key] !== undefined && userAnswers[key] !== null;
    });

    if (!isComplete) {
      setIsPassed.off();
      setHasWrongAnswer.off();
      setHasBlankAnswer.on();
      return;
    }

    const wrongAnswers = questions
      .map((_, index) => getQuestionKey(index))
      .filter((key) => userAnswers[key] !== answerKey[key]);

    if (wrongAnswers.length === 0) {
      setMissAnswers([]);
      setHasBlankAnswer.off();
      setHasWrongAnswer.off();
      setIsPassed.on();
      return;
    }

    setMissAnswers(wrongAnswers);
    setIsPassed.off();
    setHasBlankAnswer.off();
    setHasWrongAnswer.on();
  };

  const onClickRetry = () => {
    setQuestions(generateQuestions());
    setUserAnswers({});
    setMissAnswers([]);
    setIsPassed.off();
    setHasBlankAnswer.off();
    setHasWrongAnswer.off();
  };

  return (
    <HeaderLayout>
      <Container maxW="md" bg="gray.200" color="#333333" textAlign="center" p="16px">
        <Heading as="h1" size="2xl" textAlign="center" p="16px">
          Addition
        </Heading>
        {isPassed && (
          <Alert status="success" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" height="200px">
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Passed
            </AlertTitle>
            <AlertDescription maxWidth="sm">Great work. Try the next lesson!</AlertDescription>
          </Alert>
        )}
        {hasBlankAnswer && (
          <Alert status="error">
            <AlertIcon />
            Please answer every question.
          </Alert>
        )}
        {hasWrongAnswer && missAnswers.length !== 0 && (
          <Box>
            <Alert status="warning" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" height="auto">
              <AlertIcon boxSize="16px" mr={0} />
              <AlertTitle mt={1} mb={1} fontSize="sm">
                Check these answers again.
              </AlertTitle>
              <AlertDescription maxWidth="sm">
                <Flex flexDirection="row">
                  {missAnswers.map((missNumber) => (
                    <Box key={missNumber} mr="4px">
                      {missNumber}
                    </Box>
                  ))}
                </Flex>
              </AlertDescription>
            </Alert>
          </Box>
        )}

        <UnorderedList p="8px" m="0 auto" fontSize={{ base: "28px", md: "36px" }}>
          {questions.length ? (
            questions.map((question, index) => (
              <ListItem key={getQuestionKey(index)} display="flex" alignItems="center" justifyContent="center">
                <Box pr="24px">{`${getQuestionKey(index)}.`}</Box>
                <Box p="8px">{`${question.left} + ${question.right} = `}</Box>
                <Input width="110px" fontSize={{ base: "28px", md: "36px" }} borderColor="#333333" name={getQuestionKey(index)} type="number" onChange={onChangeAnswer} />
              </ListItem>
            ))
          ) : (
            <Spinner size="xl" />
          )}
        </UnorderedList>
        <QuizButtons onClick={onClickJudge} onRetry={onClickRetry} />
      </Container>
    </HeaderLayout>
  );
};

export default AdditionPage;
