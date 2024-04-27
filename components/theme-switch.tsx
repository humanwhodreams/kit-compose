"use client";

import { Moon, Sun } from "lucide-react";

import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const { setTheme } = useTheme();
  return (
    <div className="flex items-center space-x-1">
      <Label htmlFor="theme-switch">
        <Sun className="w-4 h-4" />
      </Label>
      <Switch
        id="theme-switch"
        onCheckedChange={(checked) =>
          checked ? setTheme("dark") : setTheme("light")
        }
      />
      <Label htmlFor="theme-switch">
        <Moon className="w-4 h-4" />
      </Label>
    </div>
  );
}
