import * as React from "react";

import { Container } from "@/components/container";

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
