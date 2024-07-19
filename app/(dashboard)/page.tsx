import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <p>AUTH ROUTE</p>
      <UserButton />
    </main>
  );
}
