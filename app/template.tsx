"use client";

import { Container } from "@mantine/core";

import { Header } from "@/components/header/Header";
import { HeaderSmp } from "@/components/header/HeaderSmp";
import { Footer } from "@/components/footer/Footer";

import styles from "./template.module.scss";

type TemplateProps = {
  children: React.ReactNode;
};

export default function Template({ children }: TemplateProps) {
  return (
    <>
      <Header />
      <HeaderSmp />
      <main className={styles.main}>
        <Container size="md" mt={30}>
          {children}
        </Container>
      </main>
      <Footer />
    </>
  );
}
