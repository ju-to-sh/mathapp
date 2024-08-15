/* eslint-disable react/display-name */
import { memo, FC } from "react";
import { Button, Flex, ButtonGroup, Link } from "@chakra-ui/react";
import NextLink from "next/link";

type Props = {
  onClick: () => void;
};
const onClickRetry = () => location.reload();

export const QuizButtons: FC<Props> = memo((props) => {
  const { onClick } = props;
  return (
    <Flex justify="center">
      <ButtonGroup gap="2">
        <Button variant="solid" colorScheme="blue" onClick={onClick}>
          Answer
        </Button>
        <Button variant="solid" colorScheme="teal" onClick={onClickRetry}>
          Take it again
        </Button>
        <Button variant="solid" colorScheme="teal">
          <Link as={NextLink} href="/quiz" _hover={{ textDecoration: "none" }}>
            Question list
          </Link>
        </Button>
      </ButtonGroup>
    </Flex>
  );
});
