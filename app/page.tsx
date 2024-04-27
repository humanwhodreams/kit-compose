import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeButtonGroup } from "@/components/theme-button-group";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Card>
        <CardHeader>
          <CardTitle>Button</CardTitle>
          <CardDescription>
            A button is used to trigger an action or navigation.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-x-2">
          <Button variant={"default"}>Primary</Button>
          <Button variant={"secondary"}>Secondary</Button>
          <Button variant={"outline"}>Outline</Button>
          <Button variant={"ghost"}>Ghost</Button>
          <Button variant={"link"}>Link</Button>
          <Button variant={"destructive"}>Destructive</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Input</CardTitle>
          <CardDescription>
            An input is a field used to enter and submit textual input.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input type="text" placeholder="Search for a component..." />
        </CardContent>
      </Card>
      <div className="flex items-center gap-x-4">
        <ThemeButtonGroup />
      </div>
    </main>
  );
}
