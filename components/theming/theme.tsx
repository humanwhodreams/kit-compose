import * as React from "react";

import { cn } from "@/lib/utils";

export function Theme({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      role="theme-container"
      className={cn("grid grid-cols-[400px_1fr] gap-2", className)}
    >
      {children}
    </section>
  );
}
