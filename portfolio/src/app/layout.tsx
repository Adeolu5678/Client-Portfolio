import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Mary Abiola Adeoye — Researcher & Educationist",
  description:
    "Academic portfolio of Dr. Mary Abiola Adeoye, PhD in Religious Ethics. National Coordinator, Literacy Education Division, Nigerian Baptist Convention. Researcher, author, and ordained pastor.",
  keywords: [
    "Mary Abiola Adeoye",
    "Religious Ethics",
    "Academic Portfolio",
    "Nigerian Baptist Convention",
    "Pastoral Counselling",
    "Religious Education",
  ],
  openGraph: {
    title: "Dr. Mary Abiola Adeoye",
    description: "PhD in Religious Ethics — Researcher, Author & Educationist",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
