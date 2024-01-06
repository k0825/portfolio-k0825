import { About } from "@/components/about/About";
import { Experience } from "@/components/experience/Experience";
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

        <Title order={1} mt={30} mb={10}>
          Skills
        </Title>
        <Skills />

        <Title order={1} mt={30} mb={10}>
          Tech Blog
        </Title>

        <Title order={1} mt={30} mb={10}>
          Qualifications
        </Title>

        <Title order={1} mt={30} mb={10}>
          Experience
        </Title>
        <Experience />
      </Container>
    </main>
  );
}
