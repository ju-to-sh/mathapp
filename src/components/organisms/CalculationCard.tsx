import { Card, CardBody, CardFooter, Button, Heading, Text, Stack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  src: string;
  alt: string;
  href: string;
};

export const CalculationCard = (props: Props) => {
  const { src, alt, href } = { ...props };

  return (
    <Card maxW="250px" m="0 auto">
      <CardBody m="0 auto">
        <Stack>
          <Image src={src} width={180} height={150} alt={alt} />
          <Heading size="md">かけざん</Heading>
          <Text>小学校3年生レベル</Text>
        </Stack>
      </CardBody>
      <CardFooter m="0 auto">
        <Link href={href}>
          <Button variant="solid" colorScheme="blue">
            始める
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
