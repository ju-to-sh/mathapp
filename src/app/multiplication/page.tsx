"use client";

import { Container, Heading, UnorderedList, ListItem, Input, Box, Button } from "@chakra-ui/react";
import { isEqual } from "lodash";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

type Answer = {
  [key: string]: number;
};

const MultiplicationPage: NextPage = () => {
  const getRandomArray = (range: number, length: number): number[] => {
    const array = [];
    for (let i = 0; i < length; i++) {
      array.push(Math.floor(Math.random() * range));
    }

    return array;
  };

  const sliceRandomArray = (array: number[], divide: number) => {
    const newArray = [];
    const length = array.length;
    for (let i = 0; i < Math.ceil(length / divide); i++) {
      let j = i * divide;
      let p = array.slice(j, j + divide);
      newArray.push(p);
    }
    return newArray;
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
    if (Object.keys(userAnswer).length == 10) {
      isEqual(Answer, userAnswer) ? alert("全問正解です") : alert("不正解箇所があります");
    } else {
      alert("すべての問題に回答してください");
    }
  };

  const onChangeAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer((prev) => ({ ...prev, [e.target.name]: Number(e.target.value) }));
  };

  const RandomArray = sliceRandomArray(getRandomArray(12, 20), 2);
  const [number, setNumber] = useState<number[][] | null>(null);
  const [userAnswer, setUserAnswer] = useState({});

  useEffect(() => {
    setNumber(RandomArray);
  }, []);

  return (
    <Container maxW="md" bg="gray.200" color="#333333" textAlign="center" p="16px">
      <Heading as="h1" size="2xl" textAlign="center" p="16px">
        かけざん
      </Heading>
      <UnorderedList fontSize="32px" p="8px" m="0 auto">
        {number &&
          number.map((dispNumber, index) => (
            <ListItem key={index} display="flex" alignItems="center" justifyContent="center">
              <Box p="8px">{`Q${index + 1}.  ${dispNumber[0]} × ${dispNumber[1]} = `}</Box>
              <Input width="110px" fontSize="32px" borderColor="#333333" name={`Q${index + 1}`} type="number" onChange={onChangeAnswer} />
            </ListItem>
          ))}
      </UnorderedList>
      <Button variant="solid" colorScheme="blue" onClick={onClickJudge}>
        回答する
      </Button>
    </Container>
  );
};

export default MultiplicationPage;
