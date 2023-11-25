"use client";

import { Container, Heading, UnorderedList, ListItem, Input, Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

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

  const RandomArray = sliceRandomArray(getRandomArray(11, 20), 2);
  const [number, setNumber] = useState<number[][] | null>(null);

  useEffect(() => {
    setNumber(RandomArray);
  }, []);

  return (
    <Container maxW="md" bg="blue.600" color="white">
      <Heading as="h1" size="2xl" textAlign="center" p="16px">
        かけざん
      </Heading>
      <UnorderedList fontSize="32px" p="8px" m="0 auto">
        {number &&
          number.map((dispNumber, index) => (
            <ListItem key={index} display="flex" alignItems="center" justifyContent="center">
              <Box p="8px">{`${index + 1}.  ${dispNumber[0]} × ${dispNumber[1]} = `}</Box>
              <Input htmlSize={4} width="auto" fontSize="32px" />
            </ListItem>
          ))}
      </UnorderedList>
    </Container>
  );
};

export default MultiplicationPage;
