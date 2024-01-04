import { About } from "@/components/about/About";
import { Container, Title } from "@mantine/core";

export default function Home() {
  return (
    <main>
      <Container size="lg" mt={30}>
        <Title order={1} mb={10}>
          About me
        </Title>
        <About />
      </Container>
    </main>
  );
}
