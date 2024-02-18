import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Container, MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "k0825 portfolio site",
  description: "ポートフォリオサイト",
  formatDetection: { telephone: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <MantineProvider>
          <Header />
          <main>
            <Container size="md" mt={30}>
              {children}
            </Container>
          </main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
