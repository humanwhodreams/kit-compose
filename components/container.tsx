import * as React from "react";

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid gap-4 px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-24">{children}</main>
  );
}
