import * as React from "react";

import { cn } from "@/lib/utils";

function PageHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      role="page-header"
      className={cn("mt-24 mb-12 text-center", className)}
    >
      {children}
    </section>
  );
}

function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "text-4xl font-extrabold mb-4 tracking-tight scroll-m-20 lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}
PageHeader.Title = Title;

function Description({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("text-lg text-muted-foreground text-balance", className)}>
      {children}
    </span>
  );
}
PageHeader.Description = Description;

export { PageHeader };
