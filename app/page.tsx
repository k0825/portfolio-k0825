import { About } from "@/components/about/About";
import { Zenn } from "@/components/zenn/Zenn";
import { Experience } from "@/components/experience/Experience";
import { Qualifications } from "@/components/qualifications/Qualifications";
import { Skills } from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <About />
      <Skills />
      <Zenn />
      <Qualifications />
      <Experience />
    </>
  );
}
