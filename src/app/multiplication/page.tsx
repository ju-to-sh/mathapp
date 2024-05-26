"use client";
import NextLink from "next/link";
import { Container, Heading, UnorderedList, ListItem, Input, Box, Button, Spinner, Alert, AlertIcon, AlertTitle, AlertDescription, useBoolean, Flex, ButtonGroup } from "@chakra-ui/react";
import { isEqual, chunk, without, omitBy } from "lodash";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { QuizButtons } from "@/components/molecules/QuizButtons ";

type Answer = {
  [key: string]: number;
};

const MultiplicationPage: NextPage = () => {
  const getRandomArray = (min: number, max: number, length: number): number[] => {
    const array = [];
    for (let i = 0; i < length; i++) {
      array.push(Math.floor(Math.random() * (max - min + 1)) + 1);
    }

    return array;
  };

  const genAnswer = (num: number[][] | null) => {
    let obj: Answer = {};
    num &&
      num.map((elem, index) => {
        const key = `Q${index + 1}`;
        const result = elem[0] * elem[1];
        obj[key] = result;
      });
    return obj;
  };

  const onClickJudge = () => {
    const Answer = genAnswer(number);
    if (without(Object.values(userAnswer), null).length == 10) {
      if (isEqual(Answer, userAnswer)) {
        setAlertFlag.off();
        setNotFilledInFlag.off();
        setFlag.on();
      } else {
        setFlag.off();
        setNotFilledInFlag.off();
        setAlertFlag.on();
        const diff = omitBy(userAnswer, (value, key) => Answer[key] === value);
        const diffArray = Object.keys(diff).map((key) => key);
        setMissAnswer(diffArray);
      }
    } else {
      setFlag.off();
      setAlertFlag.off();
      setNotFilledInFlag.on();
    }
  };

  const onChangeAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value == "" ? setUserAnswer((prev) => ({ ...prev, [e.target.name]: null })) : setUserAnswer((prev) => ({ ...prev, [e.target.name]: Number(e.target.value) }));
  };

  const RandomArray = chunk(getRandomArray(1, 15, 20), 2);
  const [number, setNumber] = useState<number[][] | null>(null);
  const [userAnswer, setUserAnswer] = useState({});
  const [missAnswer, setMissAnswer] = useState<string[]>([]);
  const [flag, setFlag] = useBoolean();
  const [notFilledInFlag, setNotFilledInFlag] = useBoolean();
  const [alertFlag, setAlertFlag] = useBoolean();

  useEffect(() => {
    setNumber(RandomArray);
  }, []);

  return (
    <Container maxW="md" bg="gray.200" color="#333333" textAlign="center" p="16px">
      <Heading as="h1" size="2xl" textAlign="center" p="16px">
        Question
      </Heading>
      {flag && (
        <Alert status="success" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" height="200px">
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Passed
          </AlertTitle>
          <AlertDescription maxWidth="sm">You took care of everything. <br />Let&apos;s give the next lesson!</AlertDescription>
        </Alert>
      )}
      {notFilledInFlag && (
        <Alert status="error">
          <AlertIcon />
          You have a problem that I haven&apos;t addressed yet.
        </Alert>
      )}
      {alertFlag && missAnswer.length !== 0 ? (
        <Box>
          <Alert status="warning" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" height="auto">
            <AlertIcon boxSize="16px" mr={0} />
            <AlertTitle mt={1} mb={1} fontSize="sm">
              There are some things that are wrong.
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              <Flex flexDirection="row">
                {missAnswer.map((missNumber) => (
                  <Box key={missNumber} mr="4px">
                    {missNumber}
                  </Box>
                ))}
              </Flex>
            </AlertDescription>
          </Alert>
        </Box>
      ) : (
        <></>
      )}

      <UnorderedList fontSize="32px" p="8px" m="0 auto">
        {number ? (
          number.map((dispNumber, index) => (
            <ListItem key={index} display="flex" alignItems="center" justifyContent="center">
              <Box pr="24px">{`Q${index + 1}.`}</Box>
              <Box p="8px">{`${dispNumber[0]} × ${dispNumber[1]} = `}</Box>
              <Input width="110px" fontSize="32px" borderColor="#333333" name={`Q${index + 1}`} type="number" onChange={onChangeAnswer} />
            </ListItem>
          ))
        ) : (
          <Spinner size="xl" />
        )}
      </UnorderedList>
      <QuizButtons onClick={onClickJudge} />
    </Container>
  );
};

export default MultiplicationPage;
