import { CalculationCard } from "@/components/organisms/CalculationCard";
import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="600px" bg="gray.200" color="#333333" p="16px">
      <CalculationCard src="/img/car.svg" alt="足し算の写真" />
    </Container>
  );
}
