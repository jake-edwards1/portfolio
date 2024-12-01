import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'; // If using Next.js or similar framework

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'Jake Edwards - Software Engineer',
    description: 'Software Engineer with a Bachelors of Science in Software Engineering and a minor in Computer ' +
        'Information Technology. Experienced in React, Next.js, Java, and Spring Boot. Download my resume and connect ' +
        'with me on LinkedIn and GitHub.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
