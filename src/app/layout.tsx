import Head from "next/head";
import "./styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alvin Varghese",
  description: "Personal Portfolio of Alvin Varghese",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Alvin Varghese</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
