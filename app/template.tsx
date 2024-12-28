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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleCloseClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Header />
      <HeaderSmp
        onMemuClick={handleMenuClick}
        onCloseClick={handleCloseClick}
        isMenuOpen={isMenuOpen}
      />
      <main className={styles.main}>
        <NavSmp isMenuOpen={isMenuOpen} />
        <Container size="md" mt={30}>
          {children}
        </Container>
      </main>
      <Footer />
    </>
  );
}
