"use client";

import {
  PiDiamondsFourDuotone,
  PiPaintBucketDuotone,
  PiSealCheckDuotone,
} from "react-icons/pi";

import { Button } from "./ui/button";
import Link from "next/link";

const tools = [
  {
    label: "Theme generator",
    href: "/tools/theme-generator",
    icon: PiPaintBucketDuotone,
  },
  {
    label: "Contrast checker",
    href: "/tools/contrast-checker",
    icon: PiSealCheckDuotone,
  },
  {
    label: "Tokens",
    href: "/tools/tokens",
    icon: PiDiamondsFourDuotone,
  },
];

export function SiteHeaderNavigation() {
  return (
    <ul className="flex items-center">
      {tools.map((tool, index) => {
        return (
          <li key={index}>
            <Button variant={"ghost"} className="text-base" asChild>
              <Link href={tool.href}>
                <tool.icon className="mr-2 text-lg" />
                {tool.label}
              </Link>
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
