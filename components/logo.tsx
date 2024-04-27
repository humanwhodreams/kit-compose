import * as React from "react";

import Image from "next/image";

interface LogoProps {
  children?: React.ReactNode;
}

export function Logo({ children }: LogoProps) {
  return (
    <>
      <Image
        src="/logo-black.png"
        alt="urgbi logo light mode"
        width={256}
        height={256}
        className="inline-block w-8 h-8 mr-2 dark:hidden"
      />
      <Image
        src="/logo-white.png"
        alt="urgbi logo dark mode"
        width={256}
        height={256}
        className="hidden w-8 h-8 mr-2 dark:inline-block"
      />
      {children}
    </>
  );
}
