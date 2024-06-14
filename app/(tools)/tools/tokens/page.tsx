import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
          Atomic tokens for your design systems
        </h1>
        <p className="mb-8 text-lg font-normal text-muted-foreground lg:text-xl sm:px-16 xl:px-48">
          Create design systems at the speed of thought with an extensive atom
          pattern.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 sm:items-center">
          <Button size="sm">
            Get early access
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <p className="font-medium text-muted-foreground">Currently in closed beta</p>
        </div>
      </div>
    </section>
  );
}
