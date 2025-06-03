import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "./providers";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Zaka - Software & Biomedical Engineering Student",
  description:
    "Portfolio of Muhammad Zaka, Software & Biomedical Engineering student at McMaster University specializing in machine learning, full-stack development, and healthcare technology solutions.",
  keywords: [
    "Muhammad Zaka",
    "Software Engineer",
    "Biomedical Engineering",
    "McMaster University",
    "Machine Learning",
    "React",
    "Next.js",
    "Healthcare Technology",
  ],
  authors: [{ name: "Muhammad Zaka" }],
  openGraph: {
    title: "Muhammad Zaka - Software & Biomedical Engineering Student",
    description:
      "Portfolio showcasing projects in machine learning, full-stack development, and healthcare technology",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} antialiased`}>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
