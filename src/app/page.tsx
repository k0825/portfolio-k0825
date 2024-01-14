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
        <About />
        <Skills />
        <Blog />
        <Qualifications />
        <Experience />
      </Container>
    </main>
  );
}
