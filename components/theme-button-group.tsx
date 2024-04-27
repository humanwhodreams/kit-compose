"use client";

import { Monitor, Moon, Sun } from "lucide-react";

import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export function ThemeButtonGroup() {
  const { setTheme } = useTheme();
  return (
    <div>
      <Button
        onClick={() => setTheme("dark")}
        variant={"outline"}
        size={"icon"}
        className="rounded-e-none border-r-0"
      >
        <Moon className="w-5 h-5 shrink-0" />
        <span className="sr-only">Dark mode</span>
      </Button>
      <Button
        onClick={() => setTheme("light")}
        variant={"outline"}
        size={"icon"}
        className="rounded-none"
      >
        <Sun className="w-5 h-5 shrink-0" />
        <span className="sr-only">Light mode</span>
      </Button>
      <Button
        onClick={() => setTheme("system")}
        variant={"outline"}
        size={"icon"}
        className="rounded-s-none border-l-0"
      >
        <Monitor className="w-5 h-5 shrink-0" />
        <span className="sr-only">System mode</span>
      </Button>
    </div>
  );
}
