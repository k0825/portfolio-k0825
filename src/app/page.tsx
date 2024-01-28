import { About } from "@/components/about/About";
import { Blog } from "@/components/blog/Blog";
import { Experience } from "@/components/experience/Experience";
import { Qualifications } from "@/components/qualifications/Qualifications";
import { Skills } from "@/components/skills/Skills";
import { getDatabase } from "@/data/notion";
import { Container } from "@mantine/core";

export default function Home() {
  const databaseId = "808ffdcf244942e8a2084fcf751f91b8";
  getDatabase(databaseId);
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
