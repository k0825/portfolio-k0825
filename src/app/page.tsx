import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Container, Title } from "@mantine/core";

export default function Home() {
  return (
    <main>
      <Container size="md" mt={30}>
        <Title order={1} mb={10}>
          About me
        </Title>
        <About />

        <Title order={1} mb={10}>
          Skills
        </Title>
        <Skills />
      </Container>
    </main>
  );
}
