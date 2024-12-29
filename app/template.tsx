"use client";

import { Container } from "@mantine/core";

import { Header } from "@/components/header/Header";
import { HeaderSmp } from "@/components/header/HeaderSmp";
import { NavSmp } from "@/components/navsmp/NavSmp";
import { Footer } from "@/components/footer/Footer";
import { useState } from "react";

import styles from "./template.module.scss";

type TemplateProps = {
  children: React.ReactNode;
};

export default function Template({ children }: { children: React.ReactNode }) {
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
