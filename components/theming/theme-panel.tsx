import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { defaultColors } from "@/data/themes/defaults";

export function ThemePanel() {
  return (
    <aside>
      <div className="grid p-2 gap-y-4">
        <div>
          <h2 className="text-lg font-semibold">Default colours</h2>
          <div className="grid grid-cols-3 gap-4">
            {defaultColors.map((color, index) => {
              return (
                <Button variant={"outline"} size={"sm"} key={index} className="justify-start">
                  <div
                    className={cn("w-6 h-6 rounded-full mr-2 bg-zinc-500")}
                  />
                  {color.label}
                </Button>
              );
            })}
          </div>
        </div>
        <div>
          <h2>Radius</h2>
        </div>
        <div>
          <h2>Mode</h2>
        </div>
      </div>
    </aside>
  );
}
