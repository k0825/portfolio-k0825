import { About } from "@/components/about/About";
import { Blog } from "@/components/blog/Blog";
import { Experience } from "@/components/experience/Experience";
import { Qualifications } from "@/components/qualifications/Qualifications";
import { Skills } from "@/components/skills/Skills";
import { Container } from "@mantine/core";

export default function Home() {
  return (
    <>
      <About />
      <Skills />
      <Blog />
      <Qualifications />
      <Experience />
    </>
  );
}
