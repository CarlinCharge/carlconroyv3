"use client";
import Providers from "./providers";
import { theme } from "./styles/theme";
import { Inter } from "next/font/google";
import Nav from "../app/components/Navbar/Nav";
import { Container } from "@chakra-ui/react";
import { StickySocials } from "./components/Socials/StickySocials";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers theme={theme}>
          <Container maxWidth="6xl">
            <StickySocials />
            <Nav />
          </Container>

          {children}
        </Providers>
      </body>
    </html>
  );
}
