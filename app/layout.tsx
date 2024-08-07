import "@/styles/globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Kit Compose | A collection of beautiful components for your React app.",
  description: "A collection of beautiful components for your React app.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", inter.className)}>{children}</body>
    </html>
  );
}
