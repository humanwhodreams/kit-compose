"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Skeleton } from "./ui/skeleton";
import { useMounted } from "@/hooks/use-mounted";
import { useTheme } from "next-themes";

export function ThemeSelect() {
  const { theme, setTheme } = useTheme();
  const { isMounted } = useMounted();

  if (!isMounted) {
    return <Skeleton className="w-[100px] h-9" />;
  }
  
  return (
    <Select
      defaultValue={`${theme}`}
      onValueChange={(value) => setTheme(value)}
    >
      <SelectTrigger className="w-[100px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
}
