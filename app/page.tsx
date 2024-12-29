import { About } from "@/components/about/About";
import { Zenn } from "@/components/zenn/Zenn";
import { Experience } from "@/components/experience/Experience";
import { Qualifications } from "@/components/qualifications/Qualifications";
import { Skills } from "@/components/skills/Skills";

export const revalidate = 60 * 60 * 24; // every 24 hours

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
