import { FaGithub, FaXTwitter } from "react-icons/fa6";

import Link from "next/link";
import { Logo } from "./logo";
import { SiteHeaderNavigation } from "./site-header-navigation";
import { ThemeSwitch } from "./theme-switch";
import { buttonVariants } from "./ui/button";

const connects = [
  {
    label: "GitHub",
    href: "https://github.com/nob/urgbi",
    icon: FaGithub,
  },
  {
    label: "X formely Twitter",
    href: "https://twitter.com/fromenoabasi",
    icon: FaXTwitter,
  },
];
export function SiteHeader() {
  return (
    <header className="sticky inset-x-0 top-0 w-full border-b bg-background">
      <nav className="flex items-center justify-between px-4 py-2 md:px-6 lg:px-8 xl:px-12 2xl:px-24">
        <div className="flex items-center space-x-4">
          <Link href={"/"} className="flex items-center">
            <Logo>
              <p className="text-xl font-bold tracking-wide">URGBI</p>
            </Logo>
          </Link>
          <div className="hidden md:block">
            <SiteHeaderNavigation />
          </div>
        </div>

        <ul className="flex items-center gap-x-4">
          {connects.map((connect, index) => {
            return (
              <li key={index}>
                <a
                  href={connect.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "ghost", size: "icon" })}
                >
                  <connect.icon className="text-xl" />
                  <span className="sr-only">{connect.label}</span>
                </a>
              </li>
            );
          })}
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </header>
  );
}
