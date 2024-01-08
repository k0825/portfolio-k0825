import { About } from "@/components/about/About";
import { Blog } from "@/components/blog/Blog";
import { Experience } from "@/components/experience/Experience";
import { Qualifications } from "@/components/qualifications/Qualifications";
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
        <Blog />

        <Title order={1} mt={30} mb={10}>
          Qualifications
        </Title>
        <Qualifications />

        <Title order={1} mt={30} mb={10}>
          Experience
        </Title>
        <Experience />
      </Container>
    </main>
  );
}
