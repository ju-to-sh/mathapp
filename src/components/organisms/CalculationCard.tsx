/* eslint-disable react/display-name */
import { Image, Card, CardBody, CardFooter, Button, Heading, Text, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { FC, memo } from "react";

type Props = {
  src: string;
  alt: string;
  href: string;
  title: string;
  content: string;
};

export const CalculationCard: FC<Props> = memo((props) => {
  const { src, alt, href, title, content } = { ...props };

  return (
    <Card w="280px" m="0 auto" shadow="md" borderRadius="20px">
      <CardBody m="0 auto">
        <Stack textAlign="center">
          <Image src={src} boxSize={160} alt={alt} borderRadius="full" m="0 auto" />
          <Heading size="md">{title}</Heading>
          <Text>{content}</Text>
        </Stack>
      </CardBody>
      <CardFooter m="0 auto">
        <Link href={href}>
          <Button variant="solid" colorScheme="blue">
            Start
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
});
