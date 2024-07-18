"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  const testSonner = () => {
    toast("Hello from Sonner!");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant="ghost" onClick={testSonner}>
        Test Button
      </Button>
    </main>
  );
}
