"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Home() {
  const [red, setRed] = useState(true);
  return (
    <div className="flex gap-4">
      <p className=" text-indigo-500 text-bold">
        Hello to the discord clone app!
      </p>
      <Button variant={"destructive"} onClick={() => setRed((p) => !p)}>
        Toggle red
      </Button>
      <p className={cn("text-green-500", red && "text-red-500", "font-bold")}>
        This is the text to be red.
      </p>
    </div>
  );
}
